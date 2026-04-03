import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ServiceDivider from './components/ServiceDivider'
import VigilanciaSection from './components/VigilanciaSection'
import ParallaxDivider from './components/ParallaxDivider'
import JardineriaSection from './components/JardineriaSection'
import DownloadCTA from './components/DownloadCTA'
import Clients from './components/Clients'
import Certifications from './components/Certifications'
import FAQ from './components/FAQ'
import MapWidget from './components/MapWidget'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CustomCursor from './components/CustomCursor'
import ThemeContext from './context/ThemeContext'

export default function App() {
  const [activeTheme, setActiveTheme] = useState('neutral')
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jms-dark-mode')
      if (saved !== null) return saved === 'true'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('jms-dark-mode', darkMode)
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, darkMode, setDarkMode }}>
      <div className="app">
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <ServiceDivider />
        <VigilanciaSection />
        <ParallaxDivider variant="vig-to-jar" />
        <JardineriaSection />
        <DownloadCTA />
        <Clients />
        <Certifications />
        <FAQ />
        <MapWidget />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeContext.Provider>
  )
}
