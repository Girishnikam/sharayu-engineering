/**
 * Brand two-tone heading: first part navy, second part orange ("OUR SERVICES").
 * `title` is either { lead, accent } or a plain string (split at the first space).
 */
export default function Heading({ as: Tag = 'h2', title, className, id }) {
  const { lead, accent } =
    typeof title === 'string'
      ? { lead: title.split(' ')[0], accent: title.split(' ').slice(1).join(' ') }
      : title

  return (
    <Tag className={className} id={id}>
      {lead}
      {accent ? (
        <>
          {' '}
          <span className="accent">{accent}</span>
        </>
      ) : null}
    </Tag>
  )
}
