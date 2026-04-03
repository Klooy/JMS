import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import styles from './DarkModeToggle.module.css'

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      className={`${styles.toggle} ${darkMode ? styles.dark : ''}`}
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={darkMode ? 'Modo claro' : 'Modo oscuro'}
    >
      <motion.div
        className={styles.slider}
        animate={{ x: darkMode ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {darkMode ? <Moon size={14} /> : <Sun size={14} />}
      </motion.div>
      <div className={styles.icons}>
        <Sun size={10} className={styles.sunIcon} />
        <Moon size={10} className={styles.moonIcon} />
      </div>
    </motion.button>
  )
}
