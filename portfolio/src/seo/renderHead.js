const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Prevents "</script>" inside JSON from closing the tag early.
export const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c')

/** Serialises head data from buildHead() into HTML for the prerendered pages. */
export function renderHeadToString(head) {
  const tags = head.tags.map(({ tag, attrs }) => {
    const attributes = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ')
    return `<${tag} ${attributes} data-seo>`
  })

  return [
    `<title>${escapeHtml(head.title)}</title>`,
    ...tags,
    `<script type="application/ld+json" data-seo>${serializeJsonLd(head.jsonLd)}</script>`,
  ].join('\n    ')
}
