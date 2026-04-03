import { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Leaf, Scissors, TreePine, Sprout, FlaskConical, PencilRuler, Waves, PersonStanding, Wrench, SprayCan, Building2, Factory, GraduationCap, Hotel, HardHat, Sparkles } from 'lucide-react'
import ThemeContext from '../context/ThemeContext'
import styles from './JardineriaSection.module.css'

const aseoServices = [
  { icon: <Building2 size={24} />, title: 'Limpieza de Edificios', desc: 'Servicio profesional para edificios residenciales y corporativos.' },
  { icon: <Factory size={24} />, title: 'Limpieza Industrial', desc: 'Servicios de aseo para plantas industriales y bodegas.' },
  { icon: <GraduationCap size={24} />, title: 'Instituciones Educativas', desc: 'Limpieza y desinfección para colegios y universidades.' },
  { icon: <Hotel size={24} />, title: 'Hoteles y Restaurantes', desc: 'Servicios de aseo para el sector hotelero y gastronómico.' },
  { icon: <HardHat size={24} />, title: 'Limpieza de Obra', desc: 'Limpieza post-construcción y durante obras civiles.' },
  { icon: <Sparkles size={24} />, title: 'Lavado de Fachadas', desc: 'Lavado e hidrofugado profesional de fachadas y vidrios.' },
]

const jardinServices = [
  { icon: <Scissors size={24} />, title: 'Corte de Césped', desc: 'Recuperación y corte profesional de césped y bordes.' },
  { icon: <TreePine size={24} />, title: 'Tratamiento de Árboles', desc: 'Poda, tratamiento y mantenimiento de árboles y arbustos.' },
  { icon: <Sprout size={24} />, title: 'Control de Malezas', desc: 'Eliminación de malezas y control integral de plagas.' },
  { icon: <FlaskConical size={24} />, title: 'Fertilizaciones', desc: 'Programas de fertilización para mantener la salud de sus jardines.' },
  { icon: <PencilRuler size={24} />, title: 'Diseño de Jardines', desc: 'Diseño y elaboración de jardines personalizados.' },
  { icon: <Waves size={24} />, title: 'Mantenimiento de Piscinas', desc: 'Personal con formación en mantenimiento de piscinas.' },
  { icon: <PersonStanding size={24} />, title: 'Salvavidas', desc: 'Supervisión del uso adecuado de piscinas.' },
  { icon: <Wrench size={24} />, title: 'Servicio de Todero', desc: 'Labores de barrido, poda, fumigación y mantenimiento integral.' },
]

export default function JardineriaSection() {
  const { setActiveTheme } = useContext(ThemeContext)
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (inView) setActiveTheme('jardineria')
  }, [inView, setActiveTheme])

  return (
    <section className={styles.section} id="jardineria" ref={ref}>
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      <div className={styles.leafPattern} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.iconBadge}>
            <Leaf size={24} />
          </div>
          <h2>Jardinería, Aseo & Mantenimiento</h2>
          <p>Personal especializado y entrenado para brindar limpieza, mantenimiento y paisajismo con los más altos estándares de calidad.</p>
        </motion.div>

        {/* Aseo Section */}
        <motion.div
          className={styles.subHeader}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SprayCan size={20} />
          <h3>Aseo y Limpieza Especializada</h3>
        </motion.div>

        <div className={styles.grid}>
          {aseoServices.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(16,185,129,0.12)' }}
            >
              <div className={styles.cardIcon}>{s.icon}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Jardineria Section */}
        <motion.div
          className={styles.subHeader}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '48px' }}
        >
          <Leaf size={20} />
          <h3>Jardinería, Paisajismo & Mantenimiento</h3>
        </motion.div>

        <div className={styles.grid}>
          {jardinServices.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(16,185,129,0.12)' }}
            >
              <div className={styles.cardIcon}>{s.icon}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
