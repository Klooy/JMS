import { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Video, Bell, Zap, Fingerprint, Satellite, Radio, ClipboardList, Eye } from 'lucide-react'
import ThemeContext from '../context/ThemeContext'
import styles from './VigilanciaSection.module.css'

const services = [
  { icon: <Shield size={28} />, title: 'Seguridad Física 24/7', desc: 'Personal capacitado en administración de riesgos, dotados con elementos necesarios para prevenir el riesgo.' },
  { icon: <Video size={28} />, title: 'CCTV & Cámaras', desc: 'Última tecnología en electrónica incluyendo cámaras y grabadoras digitales (DVR) con monitoreo remoto 24h.' },
  { icon: <Bell size={28} />, title: 'Sistema de Alarmas', desc: 'Instalación y monitoreo de sistemas de alarmas para protección integral de instalaciones.' },
  { icon: <Zap size={28} />, title: 'Cercas Eléctricas', desc: 'Seguridad perimetral con cercas eléctricas para la protección integral de su propiedad.' },
  { icon: <Fingerprint size={28} />, title: 'Control Biométrico', desc: 'Control de acceso y asistencia con tecnología biométrica de última generación.' },
  { icon: <Satellite size={28} />, title: 'Control Satelital', desc: 'Sistema de control satelital y comunicación directa con la red de apoyo.' },
]

const includes = [
  'Supervisión permanente',
  'Servicio de turnero',
  'Equipos de comunicación',
  'Libro de control de apuntes y novedades',
  'Elementos necesarios para prevenir el riesgo',
  'Comunicación directa con red de apoyo',
]

export default function VigilanciaSection() {
  const { setActiveTheme } = useContext(ThemeContext)
  const [ref, inView] = useInView({ threshold: 0.15 })
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (inView) setActiveTheme('vigilancia')
    else setActiveTheme('neutral')
  }, [inView, setActiveTheme])

  return (
    <section className={styles.section} id="vigilancia" ref={ref}>
      {/* Animated background grid */}
      <div className={styles.bgGrid} />
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.iconBadge}>
            <Shield size={24} />
          </div>
          <h2>Seguridad Pacífico Preventiva</h2>
          <p>Servicio de seguridad prestado con personal capacitado en administración de riesgos, con énfasis en manejo y atención del personal de las instalaciones custodiadas.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(230,57,70,0.15)' }}
            >
              <div className={styles.cardIcon}>{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className={styles.cardLine} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.includesBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.includesHeader}>
            <ClipboardList size={20} />
            <h4>El servicio incluye:</h4>
          </div>
          <div className={styles.includesGrid}>
            {includes.map((item) => (
              <div key={item} className={styles.includeItem}>
                <Eye size={16} className={styles.checkIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
