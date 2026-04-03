import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Heart, Eye } from 'lucide-react'
import styles from './About.module.css'

const cards = [
  {
    icon: <Target size={32} />,
    title: 'Nuestro Objetivo',
    text: 'Convertirnos en su aliado estratégico realizando con eficiencia y eficacia las actividades complementarias, basándonos en una filosofía de mejoramiento continuo.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Misión',
    text: 'Prestar servicios generales de manera integral cuya filosofía de trabajo es la mejora permanente de los procesos y la satisfacción de nuestros clientes.',
  },
  {
    icon: <Eye size={32} />,
    title: 'Visión',
    text: 'Ser una empresa reconocida a nivel nacional por la eficiencia y eficacia en la prestación de sus servicios, elevando siempre nuestra calidad.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={styles.section} id="nosotros">
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Sobre Nosotros</span>
          <h2>Más de <span className={styles.accent}>25 años</span> de experiencia</h2>
          <p>Una firma especializada en proveer servicios de seguridad integral, aseo, jardinería y mantenimiento en la región Norte Santandereana.</p>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <div className={styles.iconWrap}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>15+</span>
            <span className={styles.statLabel}>Clientes Activos</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>24/7</span>
            <span className={styles.statLabel}>Servicio Continuo</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>$250M</span>
            <span className={styles.statLabel}>Póliza de Seguro</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Compromiso</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
