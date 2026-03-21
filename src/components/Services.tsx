import { motion, useReducedMotion } from 'framer-motion'
import { Palette, Code2, Search, Wrench } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Webdesign',
    description: 'Individuelles Design, das zu Ihrem Unternehmen passt — kein Template, kein Einheitsbrei.',
  },
  {
    icon: Code2,
    title: 'Entwicklung',
    description: 'Sauber entwickelt, blitzschnell geladen und auf jedem Gerät perfekt.',
  },
  {
    icon: Search,
    title: 'SEO-Grundlagen',
    description: 'Technisch sauber und für Suchmaschinen optimiert — damit Sie von Anfang an gefunden werden.',
  },
  {
    icon: Wrench,
    title: 'Betreuung',
    description: 'Monatliche Pflege, Updates und technischer Support — wir kümmern uns dauerhaft um Ihre Website.',
  },
]

const REDUCED = { duration: 0, delay: 0 }
const cardTransitions = services.map((_, i) => ({ duration: 0.6, delay: i * 0.1 }))

export default function Services() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="leistungen" className="bg-[#111111] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
        >
          <p className="section-label mb-3">Leistungen</p>
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Was wir für Sie tun
          </h2>
          <p className="text-[#888] text-lg max-w-xl mb-14">
            Alles aus einer Hand — von der ersten Idee bis zur fertigen Website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={shouldReduce ? REDUCED : cardTransitions[index]}
                whileHover={{ y: -2 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-xl p-6 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-black" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
