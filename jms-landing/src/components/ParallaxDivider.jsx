import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './ParallaxDivider.module.css'

export default function ParallaxDivider({ variant = 'vig-to-jar' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y3 = useTransform(scrollYProgress, [0, 1], [120, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95])

  const isVigToJar = variant === 'vig-to-jar'

  return (
    <div
      ref={ref}
      className={`${styles.parallax} ${isVigToJar ? styles.vigToJar : styles.jarToNeutral}`}
    >
      {/* Floating geometric shapes */}
      <motion.div className={`${styles.shape} ${styles.s1}`} style={{ y: y1 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect width="80" height="80" rx="20" fill="currentColor" opacity="0.08" />
        </svg>
      </motion.div>
      <motion.div className={`${styles.shape} ${styles.s2}`} style={{ y: y2 }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="30" fill="currentColor" opacity="0.06" />
        </svg>
      </motion.div>
      <motion.div className={`${styles.shape} ${styles.s3}`} style={{ y: y3 }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <polygon points="50,0 100,100 0,100" fill="currentColor" opacity="0.05" />
        </svg>
      </motion.div>
      <motion.div className={`${styles.shape} ${styles.s4}`} style={{ y: y1 }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" opacity="0.07" transform="rotate(45 20 20)" />
        </svg>
      </motion.div>

      <motion.div className={styles.content} style={{ opacity, scale }}>
        <div className={styles.line} />
        <span className={styles.text}>
          {isVigToJar ? '— Naturaleza al servicio de su espacio —' : '— Servimos con gratitud —'}
        </span>
        <div className={styles.line} />
      </motion.div>
    </div>
  )
}
