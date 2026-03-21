import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#555] hover:text-white text-sm transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <h1
          className="font-extrabold text-white mb-8"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
        >
          Datenschutzerklärung
        </h1>

        {/* PLACEHOLDER — owner must fill in real DSGVO-compliant privacy policy before launch */}
        <div className="space-y-6 text-[#888] text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">2. Datenerfassung auf dieser Website</h2>
            <p>
              Diese Website erfasst keine personenbezogenen Daten über Tracking oder Analytics. Das Kontaktformular überträgt Ihre Daten aktuell nicht — eine E-Mail-Integration ist in Vorbereitung.
            </p>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">3. Verantwortliche Stelle</h2>
            <p>[Angaben zur verantwortlichen Stelle gemäß DSGVO Art. 13]</p>
          </div>
          <p className="text-[#444] text-xs mt-8 pt-8 border-t border-[#1e1e1e]">
            Hinweis — Bitte durch eine vollständige DSGVO-konforme Datenschutzerklärung ersetzen vor dem Launch.
          </p>
        </div>
      </div>
    </div>
  )
}
