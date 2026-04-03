import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, HardHat, Landmark, Handshake } from 'lucide-react'
import styles from './Certifications.module.css'

const certs = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Póliza Civil Extracontractual',
    desc: 'Póliza vigente No. B-250008780 de Seguros Mundial por $250.000.000 COP.',
    color: '#e63946',
  },
  {
    icon: <HardHat size={32} />,
    title: 'SG-SST Certificado',
    desc: 'Sistema de Gestión de Seguridad y Salud en el Trabajo conforme a Ley 1562/2012.',
    color: '#f59e0b',
  },
  {
    icon: <Landmark size={32} />,
    title: 'Cámara de Comercio',
    desc: 'Certificado de existencia y representación legal. Matrícula No. 470232.',
    color: '#0ea5e9',
  },
  {
    icon: <Handshake size={32} />,
    title: 'FENALPORTEC',
    desc: 'Empresa agremiada a la Federación Nacional de Porterías, Conserjerías y Afines.',
    color: '#10b981',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Respaldo & Certificaciones</span>
          <h2>Garantías que nos respaldan</h2>
        </motion.div>

        <div className={styles.grid}>
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardIcon} style={{ background: `${c.color}15`, color: c.color }}>
                {c.icon}
              </div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <div className={styles.cardAccent} style={{ background: c.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
