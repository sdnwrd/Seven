import { motion, useReducedMotion } from 'framer-motion'

const placeholderProjects = [
  { name: 'Projekt 1', category: 'Einzelhandel' },
  { name: 'Projekt 2', category: 'Gastronomie' },
  { name: 'Projekt 3', category: 'Dienstleistung' },
]

const REDUCED = { duration: 0, delay: 0 }
const projectTransitions = placeholderProjects.map((_, i) => ({ duration: 0.6, delay: i * 0.1 }))
const headerTransition = { duration: 0.6 }

export default function Portfolio() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="portfolio" className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduce ? REDUCED : headerTransition}
        >
          <p className="section-label mb-3">Unsere Arbeiten</p>
          <h2
            className="font-extrabold text-white mb-2"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Projekte
          </h2>
          <p className="text-[#888] text-lg mb-14 max-w-xl">
            Referenzen folgen in Kürze — wir bauen gerade die ersten Websites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={shouldReduce ? REDUCED : projectTransitions[index]}
              whileHover={shouldReduce ? {} : { y: -4 }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-xl overflow-hidden transition-colors duration-200 cursor-pointer"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-[#222] flex items-center justify-center">
                <span className="text-[#333] text-sm font-medium">Screenshot folgt</span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm mb-1">{project.name}</h3>
                <span className="inline-block text-[#555] text-xs border border-[#2a2a2a] rounded px-2 py-0.5">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
