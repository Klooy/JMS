import { motion } from 'framer-motion'
import { Shield, Leaf, ChevronDown } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Animated background particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          NIT: 901913087-7 · Cúcuta, Colombia
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          CONSERJERÍA{' '}
          <span className={styles.highlight}>JMS</span>{' '}
          S.A.S.
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          "Nacimos en nuestra bella Cúcuta y fuimos creados para servir con gratitud"
        </motion.p>

        <motion.div
          className={styles.pillars}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <a href="#vigilancia" className={styles.pillar}>
            <div className={`${styles.pillarIcon} ${styles.vigIcon}`}>
              <Shield size={28} />
            </div>
            <div>
              <h3>Seguridad Pacífico Preventiva</h3>
              <p>Conserjería física, CCTV, alarmas y más</p>
            </div>
          </a>
          <a href="#jardineria" className={styles.pillar}>
            <div className={`${styles.pillarIcon} ${styles.jarIcon}`}>
              <Leaf size={28} />
            </div>
            <div>
              <h3>Jardinería & Aseo</h3>
              <p>Paisajismo, limpieza, mantenimiento integral</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a href="#contacto" className={styles.btnPrimary}>Solicitar Cotización</a>
          <a href="#servicios" className={styles.btnOutline}>Ver Servicios</a>
        </motion.div>

        <motion.a
          href="#nosotros"
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.a>
      </div>
    </section>
  )
}
