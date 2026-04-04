import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import ThemeContext from '../context/ThemeContext'
import DarkModeToggle from './DarkModeToggle'
import MagneticWrap from './MagneticWrap'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { activeTheme, darkMode, setDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const themeClass =
    activeTheme === 'vigilancia' ? styles.vigTheme
    : activeTheme === 'jardineria' ? styles.jarTheme
    : ''

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${themeClass}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          <img src="/logo.png" alt="Conserjería JMS S.A.S." className={styles.logoImg} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>CONSERJERÍA <strong>JMS</strong></span>
            <span className={styles.logoSub}>S.A.S.</span>
          </div>
        </a>

        <div className={styles.desktopMenu}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <MagneticWrap intensity={0.2}>
            <a href="tel:+573143311791" className={styles.ctaBtn}>
              <Phone size={16} /> Llamar ahora
            </a>
          </MagneticWrap>
        </div>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className={styles.mobileDarkMode}>
              <span>Modo oscuro</span>
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <a href="tel:+573143311791" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
              <Phone size={16} /> Llamar ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
