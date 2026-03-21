import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer: 'In der Regel dauert die Umsetzung einer Website 10–14 Werktage ab dem ersten Gespräch. Der genaue Zeitplan hängt vom Umfang und der Bereitstellung Ihrer Inhalte ab.',
  },
  {
    question: 'Was ist im monatlichen Paket enthalten?',
    answer: 'Das monatliche Paket umfasst Hosting, SSL-Zertifikat, regelmäßige Sicherheitsupdates, technischen Support sowie kleine Inhaltsänderungen auf Anfrage.',
  },
  {
    question: 'Kann ich die Website selbst bearbeiten?',
    answer: 'Das besprechen wir gerne individuell. Je nach Wunsch bauen wir ein einfaches Content-Management-System ein, oder übernehmen alle Änderungen für Sie.',
  },
  {
    question: 'Was benötige ich, um zu starten?',
    answer: 'Für den Start benötigen wir nur ein kurzes Gespräch, um Ihre Ziele zu verstehen. Texte, Bilder und weitere Inhalte können wir gemeinsam erarbeiten.',
  },
  {
    question: 'Bieten Sie auch Online-Shops an?',
    answer: 'Ja, wir bauen auch Online-Shops. Die Umsetzung und der Preis hängen vom gewünschten Funktionsumfang ab — sprechen Sie uns einfach an.',
  },
  {
    question: 'Was passiert, wenn ich kündige?',
    answer: 'Das monatliche Paket ist jederzeit kündbar. Ihre Website und alle Daten gehören Ihnen — wir übergeben alles sauber, ohne Haken.',
  },
]

const REDUCED = { duration: 0, delay: 0 }
const headerTransition = { duration: 0.6 }
const listTransition = { duration: 0.6, delay: 0.1 }
const chevronTransition = { duration: 0.2 }
const expandTransition = { duration: 0.3, ease: 'easeInOut' as const }

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const shouldReduce = useReducedMotion()

  return (
    <div className="border-b border-[#1e1e1e]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-medium text-sm sm:text-base">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={shouldReduce ? REDUCED : chevronTransition}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-[#555]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={shouldReduce ? REDUCED : expandTransition}
            className="overflow-hidden"
          >
            <p className="text-[#888] text-sm leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const shouldReduce = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduce ? REDUCED : headerTransition}
        >
          <p className="section-label mb-3">FAQ</p>
          <h2
            className="font-extrabold text-white mb-14"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Häufige Fragen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={shouldReduce ? REDUCED : listTransition}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
