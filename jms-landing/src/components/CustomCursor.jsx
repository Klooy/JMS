import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Don't show on touch devices
    const checkTouch = () => setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0)
    checkTouch()
    if (isMobile) return

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    // Detect hoverable elements
    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, [data-cursor-hover]')
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    // Recheck periodically for dynamically added elements
    addHoverListeners()
    const interval = setInterval(addHoverListeners, 3000)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      clearInterval(interval)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className={styles.dot}
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
      />
      <motion.div
        className={`${styles.ring} ${isHovering ? styles.ringHover : ''}`}
        animate={{
          x: pos.x - (isHovering ? 24 : 18),
          y: pos.y - (isHovering ? 24 : 18),
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}
      />
    </>
  )
}
