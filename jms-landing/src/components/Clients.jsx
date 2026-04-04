import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, ChevronDown } from 'lucide-react'
import styles from './Clients.module.css'

const clients = [
  'Conjunto Cerrado Callejas B',
  'Conjunto Callejas Reservado',
  'Conjunto Cerrado Manzanares',
  'Condominio Residencial Linares',
  'Conjunto Valles de Beraca',
  'Condominio Prados del Este',
  'Conjunto Milano Club',
  'Conjunto Villas de Serranova',
  'Conjunto Riviera del Este',
  'Conjunto Hacienda San Juan',
  'Conjunto Cerrado Moka',
  'Condominio Manolo Lemus',
  'Comercial El Palacio',
  'Conjunto Cerrado Callejas A',
  'Conjunto Juana Paula',
]

export default function Clients() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={styles.section} id="clientes" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Clientes</span>
          <h2>Confían en nosotros</h2>
          <p>Conjuntos, condominios y empresas que han elegido a JMS como su aliado en seguridad y servicios.</p>
        </motion.div>

        <button
          className={`${styles.toggleBtn} ${isOpen ? styles.toggleOpen : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Ocultar clientes' : `Ver nuestros ${clients.length} clientes`}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.gridWrapper}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className={styles.grid}>
                {clients.map((name, i) => (
                  <motion.div
                    key={name}
                    className={styles.card}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
                  >
                    <div className={styles.cardIcon}>
                      <Building2 size={20} />
                    </div>
                    <span>{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
