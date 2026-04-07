import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, HelpCircle } from 'lucide-react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: '¿Qué tipo de empresa es JMS?',
    a: 'Somos una empresa especializada en servicios de seguridad física, aseo, jardinería y paisajismo. Contamos con certificado de existencia de la Cámara de Comercio de Cúcuta.',
  },
  {
    q: '¿Qué tipo de seguridad ofrecen?',
    a: 'Nos enfocamos en portería, recepción, mantenimiento y atención de residentes, dotados con elementos necesarios para prevenir el riesgo. No somos empresa de vigilancia privada.',
  },
  {
    q: '¿Qué incluye el servicio de seguridad 24/7?',
    a: 'Incluye supervisión permanente, servicio de turnero, equipos de comunicación, libro de control, elementos necesarios para prevenir el riesgo, sistema de control satelital y comunicación directa con la red de apoyo.',
  },
  {
    q: '¿Cuentan con póliza de seguro?',
    a: 'Sí, contamos con una póliza de responsabilidad civil extracontractual vigente No. B-250008780 de la compañía Seguros Mundial, por un valor asegurado de $250.000.000 COP, que cubre daños a terceros, hurtos y demás situaciones derivadas del servicio.',
  },
  {
    q: '¿Qué servicios de aseo ofrecen?',
    a: 'Ofrecemos limpieza de edificios, centros comerciales, limpieza industrial, hospitalaria, instituciones educativas, hoteles y restaurantes, limpieza de obra, lavado de fachadas, desinfección de áreas críticas y más.',
  },
  {
    q: '¿Realizan diseño de jardines?',
    a: 'Sí, contamos con jardineros especializados que realizan diseño y elaboración de jardines personalizados, sugiriendo las plantas y materiales que mejor se ajusten al estilo deseado, cuidando el valor, la durabilidad y el fácil mantenimiento.',
  },
  {
    q: '¿Qué es el servicio de todero?',
    a: 'Es un servicio integral donde un operario se encarga de labores de barrido, poda, fumigación, mantenimiento de zonas verdes y del agua de la piscina. Incluye suministro de insumos como jabón, trapero, escoba, fertilizantes, herramientas de jardinería y productos para mantener la piscina.',
  },
  {
    q: '¿En qué zonas prestan servicios?',
    a: 'Actualmente prestamos servicios en Cúcuta y el área metropolitana del Norte de Santander. Atendemos principalmente conjuntos residenciales, condominios, centros comerciales y empresas.',
  },
  {
    q: '¿Cómo solicito una cotización?',
    a: 'Puede contactarnos al 314 331 1791 (WhatsApp), llamar al 607 548 9078, escribir a contabilidadjmse@gmail.com o llenar el formulario de contacto en esta página. Estamos prestos a sustentar personalmente nuestro ofrecimiento.',
  },
]

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button className={styles.question} onClick={toggle} aria-expanded={isOpen}>
        <span className={styles.qNumber}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.qText}>{faq.q}</span>
        <motion.div
          className={styles.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [sectionOpen, setSectionOpen] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={styles.section} id="faq" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconBadge}><HelpCircle size={24} /></div>
          <h2>Preguntas Frecuentes</h2>
          <p>Resolvemos las dudas más comunes sobre nuestros servicios</p>
        </motion.div>

        <button
          className={`${styles.toggleBtn} ${sectionOpen ? styles.toggleOpen : ''}`}
          onClick={() => setSectionOpen(!sectionOpen)}
          aria-expanded={sectionOpen}
        >
          <span>{sectionOpen ? 'Ocultar preguntas' : `Ver ${faqs.length} preguntas frecuentes`}</span>
          <motion.div
            animate={{ rotate: sectionOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {sectionOpen && (
            <motion.div
              className={styles.listWrapper}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className={styles.list}>
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    index={i}
                    isOpen={openIndex === i}
                    toggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
