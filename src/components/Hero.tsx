import { motion, useReducedMotion } from 'framer-motion'

const ctaHoverTransition = { duration: 0.15 }

const PATH_COUNT = 36
const floatingPathDurations = Array.from({ length: PATH_COUNT }, () => 20 + Math.random() * 10)
const floatingPathTransitions = floatingPathDurations.map((duration) => ({
  duration,
  repeat: Infinity,
  ease: 'linear' as const,
}))

interface PathData {
  id: number
  d: string
  width: number
}

function FloatingPaths({ position }: { position: number }) {
  const shouldReduce = useReducedMotion()

  const paths: PathData[] = Array.from({ length: PATH_COUNT }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-white" viewBox="0 0 696 316" fill="none">
        <title>Hintergrund</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={shouldReduce ? {} : {
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={floatingPathTransitions[path.id]}
          />
        ))}
      </svg>
    </div>
  )
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const shouldReduce = useReducedMotion()
  const title = 'Websites die Kunden gewinnen.'
  const words = title.split(' ')

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduce ? 0 : 2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a2a2a] bg-black/50 backdrop-blur-sm text-sm font-medium text-[#888]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {/* PLACEHOLDER: replace X with real number or remove this badge */}
              Vertraut von 10+ Unternehmen
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mb-6 tracking-tight leading-none">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 sm:mr-4 last:mr-0">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: shouldReduce ? 0 : 100, opacity: shouldReduce ? 1 : 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: shouldReduce ? 0 : wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-[#888] mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Professionelle Webauftritte für kleine und mittelständische Unternehmen - schnell, hochwertig, zuverlässig.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.8, delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollTo('kontakt')}
              whileHover={shouldReduce ? {} : { scale: 1.02 }}
              transition={ctaHoverTransition}
              className="bg-white text-black font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/90 transition-colors"
            >
              Jetzt anfragen →
            </motion.button>

            <p className="mt-4 text-sm text-[#444]">
              Kein langer Vertrag · Schnelle Lieferung · Made in Germany
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
