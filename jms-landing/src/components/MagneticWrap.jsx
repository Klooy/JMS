import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagneticWrap({ children, intensity = 0.3, className = '' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * intensity
    const y = (e.clientY - rect.top - rect.height / 2) * intensity
    setPos({ x, y })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  )
}
