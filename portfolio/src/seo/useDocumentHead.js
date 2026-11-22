import { useEffect } from 'react'
import { serializeJsonLd } from './renderHead'

/** Applies head data from buildHead() to the live document (client-side navigation). */
function applyHead(head) {
  document.title = head.title
  document.head.querySelectorAll('[data-seo]').forEach((node) => node.remove())

  const fragment = document.createDocumentFragment()
  head.tags.forEach(({ tag, attrs }) => {
    const element = document.createElement(tag)
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value))
    element.setAttribute('data-seo', '')
    fragment.appendChild(element)
  })

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-seo', '')
  script.textContent = serializeJsonLd(head.jsonLd)
  fragment.appendChild(script)

  document.head.appendChild(fragment)
}

export function useDocumentHead(head) {
  useEffect(() => {
    applyHead(head)
  }, [head])
}
