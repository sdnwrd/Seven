import { motion, useReducedMotion } from 'framer-motion'

const stats = [
  { value: '14 Tage', label: 'bis zur fertigen Website' },
  { value: '100%', label: 'persönliche Betreuung' },
]

const REDUCED = { duration: 0, delay: 0 }
const textTransition = { duration: 0.6 }
const statsTransition = { duration: 0.6, delay: 0.15 }

export default function About() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="ueber-uns" className="bg-[#111111] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduce ? REDUCED : textTransition}
          >
            <p className="section-label mb-3">Über uns</p>
            <h2
              className="font-extrabold text-white mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
            >
              Wer hinter Seven steht
            </h2>
            <p className="text-[#888] leading-relaxed mb-4">
              Wir sind Seven Web Solutions — ein Team aus leidenschaftlichen Entwicklern und Designern mit dem Ziel, kleinen und mittelständischen Unternehmen zu einem starken digitalen Auftritt zu verhelfen.
            </p>
            <p className="text-[#888] leading-relaxed mb-4">
              Uns liegt es am Herzen, Websites zu bauen, die nicht nur gut aussehen, sondern auch Ergebnisse liefern. Persönlich, direkt und ohne Umwege.
            </p>
            <p className="text-[#888] leading-relaxed">
              Jedes Projekt betreuen wir von Anfang bis Ende selbst — keine Vermittler, keine Überraschungen.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={shouldReduce ? REDUCED : statsTransition}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6"
              >
                <div
                  className="font-extrabold text-white mb-1"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.03em' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#666] text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
