import type { MarkdownHeading } from 'astro'
import { unescape } from 'html-escaper'
import { createSignal, type Component, createEffect, For } from 'solid-js'

type ItemOffsets = {
  id: string
  topOffset: number
}

const TableOfContents: Component<{ headings: MarkdownHeading[] }> = ({ headings = [] }) => {
  const onThisPageID = 'on-this-page-heading'
  const [headingsSignal] = createSignal([...headings], { equals: false })
  const filtered = () => headingsSignal().filter(({ depth }) => depth > 1 && depth < 4)
  const [, setItemOffsets] = createSignal<ItemOffsets[]>([])
  const [currentID, setCurrentID] = createSignal<string>('overview', { equals: false })

  createEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)')
      setItemOffsets(
        Array.from(titles).map((title) => ({
          id: title.id,
          topOffset: title.getBoundingClientRect().top + window.scrollY,
        }))
      )
    }

    getItemOffsets()
    window.addEventListener('resize', getItemOffsets)

    return () => {
      window.removeEventListener('resize', getItemOffsets)
    }
  })

  createEffect(() => {
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target
          if (id === onThisPageID) continue
          setCurrentID(entry.target.id)
          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '-100px 0% -66%',
      threshold: 1,
    }

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions)

    // Observe all the headings in the main page content.
    document.querySelectorAll('article :is(h1,h2,h3)').forEach((h) => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  })

  const onLinkClick = (e: any) => {
    setCurrentID(e.target.getAttribute('href').replace('#', ''))
  }

  return (
    <>
      <h2 id={onThisPageID} class="heading">
        On this page
      </h2>
      <ul>
        <For each={filtered()}>
          {(heading) => (
            <li
              class={`header-link depth-${heading.depth} ${
                currentID() === heading.slug ? 'current-header-link' : ''
              }`.trim()}
            >
              <a href={`#${heading.slug}`} onClick={onLinkClick}>
                {unescape(heading.text)}
              </a>
            </li>
          )}
        </For>
      </ul>
    </>
  )
}

export default TableOfContents
