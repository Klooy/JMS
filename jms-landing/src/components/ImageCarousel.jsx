import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './ImageCarousel.module.css'

import img1 from '../assets/WhatsApp Image 20.jpeg'
import img2 from '../assets/WhatsApp Image 2026-04-01 at 2.58.42 PM.jpeg'
import img3 from '../assets/WhatsApp Image 2026-04-01 at 2.58M.jpeg'

const slides = [
  { src: img1, alt: 'JMS Servicios - Imagen 1' },
  { src: img2, alt: 'JMS Servicios - Imagen 2' },
  { src: img3, alt: 'JMS Servicios - Imagen 3' },
]

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
}

export default function ImageCarousel() {
  const [[current, direction], setCurrent] = useState([0, 0])
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const paginate = useCallback((dir) => {
    setCurrent(([prev]) => {
      const next = (prev + dir + slides.length) % slides.length
      return [next, dir]
    })
  }, [])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [paginate])

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Galería</span>
          <h2>Nuestro <span className={styles.accent}>Trabajo</span></h2>
        </motion.div>

        <motion.div
          className={styles.carouselWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.viewport}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].alt}
                className={styles.slide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => paginate(-1)}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => paginate(1)}
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
