import { useState, FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  branche: string
  hasWebsite: string
  budget: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  branche: '',
  hasWebsite: '',
  budget: '',
  message: '',
}

const REDUCED = { duration: 0, delay: 0 }
const headerTransition = { duration: 0.6 }
const formTransition = { duration: 0.6, delay: 0.1 }
const successTransition = { duration: 0.4 }
const submitButtonTransition = { duration: 0.15 }

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const shouldReduce = useReducedMotion()
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!form.name.trim()) newErrors.name = 'Bitte geben Sie Ihren Namen ein.'
    if (!form.email.trim()) newErrors.email = 'Bitte geben Sie Ihre E-Mail ein.'
    else if (!isValidEmail(form.email)) newErrors.email = 'Bitte geben Sie eine gültige E-Mail ein.'
    if (!form.message.trim()) newErrors.message = 'Bitte schreiben Sie uns eine Nachricht.'
    return newErrors
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white text-sm placeholder-[#444] outline-none transition-colors focus:border-[#555] ${
      errors[field] ? 'border-red-500/60' : 'border-[#2a2a2a]'
    }`

  const selectClass = (field: keyof FormData) =>
    `w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:border-[#555] appearance-none ${
      errors[field] ? 'border-red-500/60 text-white' : 'border-[#2a2a2a] text-[#555]'
    } ${form[field] ? 'text-white' : ''}`

  return (
    <section id="kontakt" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduce ? REDUCED : headerTransition}
        >
          <p className="section-label mb-3">Kontakt</p>
          <h2
            className="font-extrabold text-white mb-2"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Jetzt anfragen
          </h2>
          <p className="text-[#888] text-lg mb-10">
            Schildern Sie uns kurz Ihr Vorhaben — wir melden uns innerhalb von 24 Stunden.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldReduce ? REDUCED : successTransition}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-10 text-center"
          >
            <CheckCircle size={40} className="text-emerald-500 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Vielen Dank!</h3>
            <p className="text-[#888]">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={shouldReduce ? REDUCED : formTransition}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
          >
            {/* Required fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  value={form.name}
                  onChange={set('name')}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-Mail *"
                  value={form.email}
                  onChange={set('email')}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <input
              type="tel"
              placeholder="Telefon (optional)"
              value={form.phone}
              onChange={set('phone')}
              className={inputClass('phone')}
            />

            {/* Optional business details */}
            <div className="pt-2">
              <p className="text-[#444] text-xs mb-3">
                Über Ihr Unternehmen{' '}
                <span className="text-[#333]">— optional, hilft uns besser vorbereitet zu sein</span>
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Unternehmensname"
                    value={form.company}
                    onChange={set('company')}
                    className={inputClass('company')}
                  />
                  <select value={form.branche} onChange={set('branche')} className={selectClass('branche')}>
                    <option value="">Branche wählen</option>
                    <option>Einzelhandel</option>
                    <option>Gastronomie</option>
                    <option>Handwerk</option>
                    <option>Dienstleistung</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select value={form.hasWebsite} onChange={set('hasWebsite')} className={selectClass('hasWebsite')}>
                    <option value="">Haben Sie bereits eine Website?</option>
                    <option>Noch keine</option>
                    <option>Ja, eine alte</option>
                    <option>Ja, eine aktuelle</option>
                  </select>
                  <select value={form.budget} onChange={set('budget')} className={selectClass('budget')}>
                    <option value="">Budget (grob)</option>
                    <option>unter 1.000 €</option>
                    <option>1.000 – 3.000 €</option>
                    <option>3.000 – 5.000 €</option>
                    <option>über 5.000 €</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <textarea
                placeholder="Ihre Nachricht *"
                value={form.message}
                onChange={set('message')}
                rows={5}
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <div>
              <motion.button
                type="submit"
                whileHover={shouldReduce ? {} : { scale: 1.02 }}
                transition={submitButtonTransition}
                className="w-full sm:w-auto bg-white text-black font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                <Send size={16} />
                Nachricht senden
              </motion.button>
              <p className="text-[#333] text-xs mt-3">
                Mit dem Absenden stimmen Sie unserer{' '}
                <a href="/datenschutz" className="underline hover:text-[#555] transition-colors">
                  Datenschutzerklärung
                </a>{' '}
                zu.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
