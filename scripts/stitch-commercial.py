"""Assemble the six commercial clips into one cut, dissolving through black between clips.

Usage (from the repo root, with the clips in one folder):
    python3 scripts/stitch-commercial.py <clips-dir> <output.mp4>

Expects these files in <clips-dir>; edit CLIPS below if the names change.
Clips without narration (the two screen captures) take their audio from the
file named in AUDIO, padded and trimmed to the picture length. Requires ffmpeg
on PATH or the imageio-ffmpeg package (pip install imageio-ffmpeg).
"""
import re
import shutil
import subprocess
import sys
from pathlib import Path

CLIPS = [
    'clip1-clearer-picture-7s.mp4',
    'clip2-run-sharper-7s-v2.mp4',
    'clip3-ai-7s-v3.mp4',
    'clip4-teaching-7s-v3.mp4',
    'clip5-tools-screencap-7s.mp4',
    'clip6-endcard-screencap.mp4',
]
# clip index -> (audio source file, delay in ms before it starts)
AUDIO = {4: ('clip5-tools-v2.mp4', 1000)}
XFADE = 1.0        # seconds each dissolve takes
PAD = 0.8          # seconds each clip holds its last frame before the dissolve, so the narration can breathe
TRANSITION = 'fadeblack'
SIZE = (1280, 720)


def ffmpeg():
    if shutil.which('ffmpeg'):
        return 'ffmpeg'
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


def duration(ff, path):
    err = subprocess.run([ff, '-i', str(path)], capture_output=True, text=True).stderr
    m = re.search(r'Duration: (\d+):(\d+):([\d.]+)', err)
    return int(m[1]) * 3600 + int(m[2]) * 60 + float(m[3])


def main(clips_dir, out):
    ff = ffmpeg()
    d = Path(clips_dir)
    vids = [d / c for c in CLIPS]
    durs = [duration(ff, v) for v in vids]
    inputs = []
    for v in vids:
        inputs += ['-i', str(v)]
    extra = {}
    for i, (src, _) in AUDIO.items():
        extra[i] = len(inputs) // 2
        inputs += ['-i', str(d / src)]
    w, h = SIZE
    fc = []
    for i in range(len(vids)):
        fc.append(f'[{i}:v]scale={w}:{h}:force_original_aspect_ratio=decrease,'
                  f'pad={w}:{h}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=24,format=yuv420p,'
                  f'tpad=stop_mode=clone:stop_duration={PAD},settb=AVTB[v{i}]')
        if i in AUDIO:
            _, delay = AUDIO[i]
            fc.append(f'[{extra[i]}:a]aresample=48000,aformat=channel_layouts=stereo,'
                      f'adelay={delay}|{delay},apad,atrim=0:{durs[i] + PAD:.3f},asetpts=PTS-STARTPTS[a{i}]')
        else:
            fc.append(f'[{i}:a]aresample=48000,aformat=channel_layouts=stereo,'
                      f'apad,atrim=0:{durs[i] + PAD:.3f},asetpts=PTS-STARTPTS[a{i}]')
    off, pv, pa = 0.0, 'v0', 'a0'
    for i in range(1, len(vids)):
        off += durs[i - 1] + PAD - XFADE
        fc.append(f'[{pv}][v{i}]xfade=transition={TRANSITION}:duration={XFADE}:offset={off:.3f}[xv{i}]')
        fc.append(f'[{pa}][a{i}]acrossfade=d={XFADE}:c1=tri:c2=tri[xa{i}]')
        pv, pa = f'xv{i}', f'xa{i}'
    cmd = [ff, '-y', '-loglevel', 'error', *inputs, '-filter_complex', ';'.join(fc),
           '-map', f'[{pv}]', '-map', f'[{pa}]', '-c:v', 'libx264', '-crf', '19', '-preset', 'medium',
           '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', str(out)]
    subprocess.run(cmd, check=True)
    print('wrote', out, 'about', round(sum(durs) + PAD * len(vids) - XFADE * (len(vids) - 1), 1), 'seconds')


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
