import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    type: 'Einmalig',
    price: 'ab 399 €',
    description: 'Website-Aufbau inkl. Design & Entwicklung',
    items: [
      'Individuelles Webdesign',
      'Mobile-optimierte Entwicklung',
      'SEO-Grundoptimierung',
      'Domain & Hosting-Einrichtung',
      'Übergabe & Einweisung',
    ],
    note: '* Preis abhängig von Umfang und Anforderungen',
  },
  {
    type: 'Monatlich',
    price: 'ab 49 €',
    suffix: '/Monat',
    description: 'Laufende Betreuung & technischer Support',
    items: [
      'Hosting & Sicherheit',
      'Regelmäßige Updates',
      'Technischer Support',
      'Kleine Inhaltsänderungen',
    ],
    note: '* Monatlich kündbar, kein langer Vertrag',
    highlight: true,
  },
]

const REDUCED = { duration: 0, delay: 0 }
const planTransitions = plans.map((_, i) => ({ duration: 0.6, delay: i * 0.1 }))
const ctaWrapperTransition = { duration: 0.6, delay: 0.2 }
const buttonHoverTransition = { duration: 0.15 }
const priceBlockTransition = { duration: 0.6, delay: 0.1 }

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Pricing() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="preise" className="bg-[#111111] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
        >
          <p className="section-label mb-3">Preise</p>
          <h2
            className="font-extrabold text-white mb-2"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Transparent & fair
          </h2>
          <p className="text-[#888] text-lg mb-8">Keine versteckten Kosten. Kein langer Vertrag.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduce ? REDUCED : priceBlockTransition}
          className="mb-10"
        >
          <p className="section-label mb-2">Preismodell</p>
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <span
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.04em' }}
            >
              ab 399 €
            </span>
            <span className="font-bold text-[#333] text-xl">+</span>
            <span
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.04em' }}
            >
              ab 49 €<span className="text-[#555] text-sm ml-1">/Monat</span>
            </span>
          </div>
          <p className="text-[#555] text-sm mb-4">
            Einmalige Einrichtung · Monatliche Betreuung · Kein langer Vertrag
          </p>
          <hr className="border-t border-[#1e1e1e]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={shouldReduce ? REDUCED : planTransitions[index]}
              className={`rounded-xl p-8 border ${
                plan.highlight
                  ? 'bg-[#1a1a1a] border-[#3a3a3a]'
                  : 'bg-[#1a1a1a] border-[#2a2a2a]'
              }`}
            >
              <p className="section-label mb-3">{plan.type}</p>
              <div className="mb-1">
                <span
                  className="font-extrabold text-white"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}
                >
                  {plan.price}
                </span>
                {plan.suffix && <span className="text-[#555] text-sm ml-1">{plan.suffix}</span>}
              </div>
              <p className="text-[#666] text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-[#888] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#444] text-xs">{plan.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduce ? REDUCED : ctaWrapperTransition}
          className="mt-10 text-center"
        >
          <motion.button
            onClick={() => scrollTo('kontakt')}
            whileHover={shouldReduce ? {} : { scale: 1.02 }}
            transition={buttonHoverTransition}
            className="bg-white text-black font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/90 transition-colors"
          >
            Jetzt Angebot anfragen →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
