import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#444] text-sm">© 2026 Seven Web Solutions</p>
        <div className="flex items-center gap-6">
          <Link to="/impressum" className="text-[#444] text-sm hover:text-[#888] transition-colors">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-[#444] text-sm hover:text-[#888] transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
