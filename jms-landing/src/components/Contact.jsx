import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, User, Send, MessageSquare, CheckCircle, Loader2 } from 'lucide-react'
import styles from './Contact.module.css'

const serviceOptions = [
  { group: 'Seguridad & Vigilancia', items: ['Conserjería Física 24/7', 'CCTV - Cámaras', 'Sistema de Alarmas', 'Cercas Eléctricas', 'Control Biométrico'] },
  { group: 'Jardinería & Aseo', items: ['Aseo y Limpieza', 'Jardinería y Paisajismo', 'Mantenimiento de Piscinas', 'Servicio de Todero', 'Fumigación'] },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const [formState, setFormState] = useState('idle') // idle | sending | sent
  const formRef = useRef(null)

  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', servicio: '', mensaje: '',
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')

    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hola, soy *${form.nombre}*.\n` +
      `📧 ${form.email}\n` +
      `📱 ${form.telefono}\n` +
      `🔎 Servicio: ${form.servicio}\n` +
      `💬 ${form.mensaje}`
    )

    setTimeout(() => {
      setFormState('sent')
      window.open(`https://wa.me/573143311791?text=${text}`, '_blank', 'noopener,noreferrer')
      setTimeout(() => {
        setFormState('idle')
        setForm({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' })
      }, 3000)
    }, 800)
  }

  return (
    <section className={styles.section} id="contacto" ref={ref}>
      <div className={styles.bgShape} />
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Contacto</span>
          <h2>¿Listo para proteger lo que importa?</h2>
          <p>Estamos prestos a sustentar personalmente nuestro ofrecimiento y resolver sus inquietudes.</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Info cards */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><User size={22} /></div>
              <div>
                <h4>Representante Legal</h4>
                <p>Ciro Alfonso Soto Rozo</p>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><Phone size={22} /></div>
              <div>
                <h4>Teléfonos</h4>
                <p>607 548 9078</p>
                <p>314 331 1791</p>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><Mail size={22} /></div>
              <div>
                <h4>Correo Electrónico</h4>
                <p>contabilidadjmse@gmail.com</p>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><MapPin size={22} /></div>
              <div>
                <h4>Dirección</h4>
                <p>Cl 11 Entre Av. 5 Y 4 Loc. 3 32<br/>El Centro, Cúcuta - Colombia</p>
              </div>
            </div>

            <div className={styles.quickActions}>
              <a href="tel:+573143311791" className={styles.quickBtn}>
                <Phone size={18} /> Llamar
              </a>
              <a href="https://wa.me/573143311791" target="_blank" rel="noopener noreferrer" className={`${styles.quickBtn} ${styles.waBtn}`}>
                <MessageSquare size={18} /> WhatsApp
              </a>
              <a href="mailto:contabilidadjmse@gmail.com" className={`${styles.quickBtn} ${styles.mailBtn}`}>
                <Mail size={18} /> Email
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
              <h3>Solicite una cotización</h3>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Nombre completo</label>
                  <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Su nombre" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Teléfono</label>
                  <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="300 000 0000" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Correo electrónico</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required />
              </div>

              <div className={styles.inputGroup}>
                <label>Servicio de interés</label>
                <select name="servicio" value={form.servicio} onChange={handleChange} required>
                  <option value="" disabled>Seleccione un servicio</option>
                  {serviceOptions.map(g => (
                    <optgroup key={g.group} label={g.group}>
                      {g.items.map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Mensaje</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={4} placeholder="Describa su necesidad..." required />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={formState !== 'idle'}
              >
                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.btnContent}>
                      <Send size={18} /> Enviar por WhatsApp
                    </motion.span>
                  )}
                  {formState === 'sending' && (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.btnContent}>
                      <Loader2 size={18} className={styles.spinner} /> Enviando...
                    </motion.span>
                  )}
                  {formState === 'sent' && (
                    <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.btnContent}>
                      <CheckCircle size={18} /> ¡Enviado!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
