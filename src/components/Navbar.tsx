import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_ITEMS = [
  { label: 'Leistungen', id: 'leistungen' },
  { label: 'Prozess', id: 'prozess' },
  { label: 'Preise', id: 'preise' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Über uns', id: 'ueber-uns' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Kontakt', id: 'kontakt' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => scrollTo(id), menuOpen ? 300 : 0)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #1e1e1e' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => scrollTo('hero')}
            className="text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Seven Web Solutions
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm transition-colors duration-200"
                style={{ color: activeId === item.id ? '#ffffff' : '#555555' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col"
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false) }}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#1e1e1e]">
            <span className="text-white font-bold text-lg tracking-tight">Seven Web Solutions</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-2"
              aria-label="Menü schließen"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-2xl font-semibold text-white hover:text-[#888] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
