import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'leistungen', 'prozess', 'preise', 'portfolio', 'ueber-uns', 'faq', 'kontakt']

export function useScrollSpy(): string {
  const [activeId, setActiveId] = useState<string>('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}
