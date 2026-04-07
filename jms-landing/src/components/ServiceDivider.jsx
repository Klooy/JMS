import { useContext } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Leaf, ArrowDown } from 'lucide-react'
import ThemeContext from '../context/ThemeContext'
import styles from './ServiceDivider.module.css'

export default function ServiceDivider() {
  const { setActiveTheme } = useContext(ThemeContext)
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className={styles.section} id="servicios" ref={ref}>
      <div className={styles.bgLeft} />
      <div className={styles.bgRight} />
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Nuestros Servicios</span>
          <h2>Dos mundos, una sola empresa</h2>
          <p>Explora nuestras dos grandes líneas de servicio. Cada una con un equipo especializado y soluciones a la medida.</p>
        </motion.div>

        <div className={styles.cards}>
          <motion.a
            href="#vigilancia"
            className={`${styles.card} ${styles.vigCard}`}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -8 }}
            onMouseEnter={() => setActiveTheme('vigilancia')}
            onMouseLeave={() => setActiveTheme('neutral')}
          >
            <div className={styles.cardGlow} />
            <div className={styles.cardBg} />
            <div className={styles.cardIcon}>
              <Shield size={40} />
            </div>
            <h3>Seguridad Pacífico<br/>Preventiva</h3>
            <p>Seguridad física 24/7, CCTV, alarmas, cercas eléctricas, control biométrico y más.</p>
            <ul className={styles.cardList}>
              <li>Seguridad Física</li>
              <li>Medios Tecnológicos</li>
              <li>Control de Acceso</li>
              <li>Supervisión Permanente</li>
            </ul>
            <div className={styles.cardAction}>
              Explorar <ArrowDown size={16} />
            </div>
          </motion.a>

          <motion.div
            className={styles.vsCircle}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
          >
            <span>&</span>
          </motion.div>

          <motion.a
            href="#jardineria"
            className={`${styles.card} ${styles.jarCard}`}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -8 }}
            onMouseEnter={() => setActiveTheme('jardineria')}
            onMouseLeave={() => setActiveTheme('neutral')}
          >
            <div className={styles.cardGlow} />
            <div className={`${styles.cardIcon} ${styles.jarIconColor}`}>
              <Leaf size={40} />
            </div>
            <h3>Jardinería,<br/>Aseo & Más</h3>
            <p>Paisajismo, limpieza especializada, mantenimiento de piscinas, fumigación y todero.</p>
            <ul className={styles.cardList}>
              <li>Aseo</li>
              <li>Jardinería y Paisajismo</li>
              <li>Mantenimiento Integral</li>
              <li>Servicio de Todero</li>
            </ul>
            <div className={`${styles.cardAction} ${styles.jarAction}`}>
              Explorar <ArrowDown size={16} />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
