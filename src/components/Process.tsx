import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Erstgespräch',
    description: 'Wir hören zu und verstehen Ihr Unternehmen, Ihre Ziele und Ihre Zielgruppe. Kostenfrei und unverbindlich.',
  },
  {
    number: '02',
    title: 'Design & Entwicklung',
    description: 'Wir entwerfen und entwickeln Ihre maßgeschneiderte Website — in der Regel innerhalb von 14 Tagen.',
  },
  {
    number: '03',
    title: 'Live & Betreuung',
    description: 'Ihre Website geht live. Wir bleiben an Ihrer Seite: Hosting, Updates und Support sind inklusive.',
  },
]

const REDUCED = { duration: 0, delay: 0 }
const stepTransitions = steps.map((_, i) => ({ duration: 0.6, delay: i * 0.15 }))

export default function Process() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="prozess" className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
        >
          <p className="section-label mb-3">So funktioniert's</p>
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            In 3 Schritten online
          </h2>
          <p className="text-[#888] text-lg max-w-xl mb-14">
            Einfach, schnell und ohne Überraschungen.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div className="hidden md:block absolute left-6 top-8 bottom-8 w-px bg-[#2a2a2a]" />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={shouldReduce ? REDUCED : stepTransitions[index]}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-[#555]">{step.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-white font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
