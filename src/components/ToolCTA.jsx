import { Link } from 'react-router-dom'

/**
 * The "this is a starting point, let's go deeper" call to action shown at the
 * end of each interactive tool. Nudges toward an engagement without being pushy.
 */
export default function ToolCTA({
  heading = 'This is the starting point, not the full picture.',
  body = 'A tool can show you where to look. Turning that into results is what we do. If something here rings true, let us take a proper look together.',
  primary = { label: 'Start a conversation', to: '/contact' },
  secondary,
}) {
  return (
    <aside className="tool-cta">
      <div>
        <h2 className="tool-cta__heading">{heading}</h2>
        <p className="tool-cta__body">{body}</p>
      </div>
      <div className="tool-cta__actions">
        <Link to={primary.to} className="btn btn--primary btn--sm">
          {primary.label}
        </Link>
        {secondary && (
          <Link to={secondary.to} className="btn btn--outline-light btn--sm">
            {secondary.label}
          </Link>
        )}
      </div>
    </aside>
  )
}
