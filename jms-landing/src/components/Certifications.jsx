import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, HardHat, Landmark, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Certifications.module.css'

const certs = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Póliza Civil Extracontractual',
    desc: 'Póliza vigente No. B-250008780 de Seguros Mundial por $250.000.000 COP.',
    color: '#e63946',
  },
  {
    icon: <HardHat size={32} />,
    title: 'SG-SST Certificado',
    desc: 'Sistema de Gestión de Seguridad y Salud en el Trabajo conforme a Ley 1562/2012.',
    color: '#f59e0b',
  },
  {
    icon: <Landmark size={32} />,
    title: 'Cámara de Comercio',
    desc: 'Certificado de existencia y representación legal. Matrícula No. 470232.',
    color: '#0ea5e9',
  },

]

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback((dir) => {
    setDirection(dir)
    setCurrent(prev => (prev + dir + certs.length) % certs.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => paginate(1) , 5000)
    return () => clearInterval(timer)
  }, [paginate])

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  const c = certs[current]

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Respaldo & Certificaciones</span>
          <h2>Garantías que nos respaldan</h2>
        </motion.div>

        <div className={styles.carousel}>
          <button className={styles.navBtn} onClick={() => paginate(-1)} aria-label="Anterior">
            <ChevronLeft size={22} />
          </button>

          <div className={styles.slideContainer}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                className={styles.card}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className={styles.cardIcon} style={{ background: `${c.color}15`, color: c.color }}>
                  {c.icon}
                </div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <div className={styles.cardAccent} style={{ background: c.color }} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={() => paginate(1)} aria-label="Siguiente">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className={styles.dots}>
          {certs.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              aria-label={`Ir a certificación ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
