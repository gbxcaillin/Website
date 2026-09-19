"""Assemble the six commercial clips into one cut with a continuous soundtrack.

Line boundaries come from LINES when present (write it from a word-level transcript,
for example faster-whisper with word_timestamps=True); otherwise the pauses in the
narration are used, which only works when the reader leaves a clear gap between lines.

Usage (from the repo root, with the clips in one folder):
    python3 scripts/stitch-commercial.py <clips-dir> <output.mp4>

Picture: each clip is muted, holds its last frame for PAD seconds, and dissolves
into the next over XFADE seconds (no dip to black).

Sound: one narration take (NARRATION, a silent-studio carrier that reads all six
lines in order) is split into lines at the pauses, and line i is placed LEAD
seconds after clip i starts. One instrumental bed (BED) runs under the whole cut,
looped with a cross-fade if it is shorter than the picture, and fades at the end.
The clips' own audio is not used, so nothing jumps at the joins.

Requires ffmpeg on PATH or the imageio-ffmpeg package (pip install imageio-ffmpeg).
"""
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

CLIPS = [
    'clip1-clearer-picture-7s.mp4',
    'clip2-run-sharper-7s-v2.mp4',
    'clip3-ai-7s-v6.mp4',
    'clip4-teaching-7s-v3.mp4',
    'clip5-tools-screencap-7s.mp4',
    'clip6-endcard-picture.mp4',
]
NARRATION = os.environ.get('NARRATION', 'narration-all-lines.m4a')   # one-take read of the six lines (audio or video file)
LINES = 'narration-lines.txt'           # optional: one 'start<TAB>end' per line, in seconds, from a word-level transcript
BED = os.environ.get('BED', 'music-bed.m4a')   # instrumental bed (any audio or video file), no voice
XFADE = 1.2        # seconds each dissolve takes
PAD = 1.0          # seconds each clip holds its last frame so the picture outlives the line
LEAD = 0.6         # seconds after a clip starts before its line begins
BED_TARGET_DB = -31.0   # mean level the bed is brought to under the narration (narration reads about -20 dB mean)
VO_GAIN = 1.0
SIZE = (1280, 720)
LINE_GAP = 0.9     # pauses shorter than this are inside a line, not between lines
SILENCE_DB = -38


def ffmpeg():
    if shutil.which('ffmpeg'):
        return 'ffmpeg'
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


def mean_db(ff, path):
    err = subprocess.run([ff, '-hide_banner', '-i', str(path), '-af', 'volumedetect', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    return float(re.search(r'mean_volume: (-?[\d.]+) dB', err)[1])


def duration(ff, path):
    err = subprocess.run([ff, '-i', str(path)], capture_output=True, text=True).stderr
    m = re.search(r'Duration: (\d+):(\d+):([\d.]+)', err)
    return int(m[1]) * 3600 + int(m[2]) * 60 + float(m[3])


def speech_segments(ff, path, count):
    """Split a narration carrier into `count` spoken lines using the pauses between them."""
    err = subprocess.run([ff, '-hide_banner', '-i', str(path), '-af',
                          f'highpass=f=120,silencedetect=n={SILENCE_DB}dB:d=0.25', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    starts = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', err)]
    ends = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', err)]
    total = duration(ff, path)
    # speech runs between silences
    runs, t = [], 0.0
    for s, e in zip(starts, ends):
        if s > t:
            runs.append([t, s])
        t = e
    if t < total - 0.05:
        runs.append([t, total])
    # merge runs separated by short pauses until we have `count` lines
    def gaps(r):
        return [r[i + 1][0] - r[i][1] for i in range(len(r) - 1)]
    while len(runs) > count:
        g = gaps(runs)
        i = g.index(min(g))
        runs[i] = [runs[i][0], runs[i + 1][1]]
        del runs[i + 1]
    if len(runs) != count:
        sys.exit(f'found {len(runs)} spoken lines in {path}, expected {count}: {runs}')
    return [(max(0.0, a - 0.08), min(total, b + 0.15)) for a, b in runs]


def main(clips_dir, out):
    ff = ffmpeg()
    d = Path(clips_dir)
    vids = [d / c for c in CLIPS]
    durs = [duration(ff, v) + PAD for v in vids]
    starts = [0.0]
    for i in range(1, len(vids)):
        starts.append(starts[-1] + durs[i - 1] - XFADE)
    total = starts[-1] + durs[-1]
    if (d / LINES).exists():
        lines = [tuple(float(x) for x in l.split()[:2]) for l in (d / LINES).read_text().splitlines() if l.strip()]
        if len(lines) != len(vids):
            sys.exit(f'{LINES} has {len(lines)} lines, expected {len(vids)}')
    else:
        lines = speech_segments(ff, d / NARRATION, len(vids))
    for i, (a, b) in enumerate(lines):
        print(f'line {i + 1}: {a:.2f}s to {b:.2f}s ({b - a:.1f}s), placed at {starts[i] + LEAD:.2f}s in the cut')
    bed_len = duration(ff, d / BED)
    bed_gain = 10 ** ((BED_TARGET_DB - mean_db(ff, d / BED)) / 20)
    print(f'bed gain x{bed_gain:.2f}')

    inputs = []
    for v in vids:
        inputs += ['-i', str(v)]
    inputs += ['-i', str(d / NARRATION), '-i', str(d / BED)]
    n_idx, b_idx = len(vids), len(vids) + 1
    w, h = SIZE
    fc = []
    # picture
    for i in range(len(vids)):
        fc.append(f'[{i}:v]scale={w}:{h}:force_original_aspect_ratio=decrease,'
                  f'pad={w}:{h}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=24,format=yuv420p,'
                  f'tpad=stop_mode=clone:stop_duration={PAD},settb=AVTB[v{i}]')
    pv = 'v0'
    for i in range(1, len(vids)):
        fc.append(f'[{pv}][v{i}]xfade=transition=fade:duration={XFADE}:offset={starts[i]:.3f}[xv{i}]')
        pv = f'xv{i}'
    # narration lines
    fc.append(f'[{n_idx}:a]aresample=48000,aformat=channel_layouts=stereo,asplit={len(vids)}'
              + ''.join(f'[n{i}]' for i in range(len(vids))))
    mix_in = []
    for i, (a, b) in enumerate(lines):
        at = int(round((starts[i] + LEAD) * 1000))
        fc.append(f'[n{i}]atrim={a:.3f}:{b:.3f},asetpts=PTS-STARTPTS,afade=t=in:d=0.05,afade=t=out:st={b - a - 0.12:.3f}:d=0.12,'
                  f'volume={VO_GAIN},adelay={at}|{at}[l{i}]')
        mix_in.append(f'[l{i}]')
    # bed: loop with a cross-fade if needed, trim to the cut, fade at the end
    loops = 1
    while bed_len * loops - 3.0 * (loops - 1) < total:
        loops += 1
    fc.append(f'[{b_idx}:a]aresample=48000,aformat=channel_layouts=stereo,asplit={loops}'
              + ''.join(f'[b{i}]' for i in range(loops)))
    prev = 'b0'
    for i in range(1, loops):
        fc.append(f'[{prev}][b{i}]acrossfade=d=3.0:c1=tri:c2=tri[bx{i}]')
        prev = f'bx{i}'
    fc.append(f'[{prev}]atrim=0:{total:.3f},asetpts=PTS-STARTPTS,volume={bed_gain:.3f},'
              f'afade=t=in:d=1.0,afade=t=out:st={total - 2.5:.3f}:d=2.5[bed]')
    fc.append(''.join(mix_in) + f'[bed]amix=inputs={len(mix_in) + 1}:normalize=0:dropout_transition=0[aout]')

    cmd = [ff, '-y', '-loglevel', 'error', *inputs, '-filter_complex', ';'.join(fc),
           '-map', f'[{pv}]', '-map', '[aout]', '-t', f'{total:.3f}',
           '-c:v', 'libx264', '-crf', '19', '-preset', 'medium',
           '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', str(out)]
    subprocess.run(cmd, check=True)
    print('wrote', out, 'about', round(total, 1), 'seconds')


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
