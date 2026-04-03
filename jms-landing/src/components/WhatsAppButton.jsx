import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573143311791"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>¿Necesitas ayuda?</span>
    </motion.a>
  )
}
