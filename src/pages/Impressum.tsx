import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Impressum() {
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
          Impressum
        </h1>

        {/* PLACEHOLDER — owner must fill in real legal information before launch */}
        <div className="space-y-6 text-[#888] text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Seven Web Solutions</p>
            <p>Vorname Nachname</p>
            <p>Straße und Hausnummer</p>
            <p>PLZ Ort</p>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">Kontakt</h2>
            <p>Telefon: Telefonnummer</p>
            <p>E-Mail: E-Mail-Adresse</p>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [USt-ID]</p>
          </div>
          <p className="text-[#444] text-xs mt-8 pt-8 border-t border-[#1e1e1e]">
            Hinweis - Bitte durch echte Angaben ersetzen vor dem Launch.
          </p>
        </div>
      </div>
    </div>
  )
}
