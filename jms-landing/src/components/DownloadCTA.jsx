import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, ArrowRight } from 'lucide-react'
import styles from './DownloadCTA.module.css'

export default function DownloadCTA() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.glow1} />
          <div className={styles.glow2} />

          <div className={styles.content}>
            <div className={styles.left}>
              <motion.div
                className={styles.filePreview}
                whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.filePage}>
                  <div className={styles.fileLines}>
                    <div className={styles.fileLine} style={{ width: '70%' }} />
                    <div className={styles.fileLine} style={{ width: '90%' }} />
                    <div className={styles.fileLine} style={{ width: '55%' }} />
                    <div className={styles.fileLine} style={{ width: '80%' }} />
                    <div className={styles.fileLine} style={{ width: '65%' }} />
                  </div>
                  <div className={styles.fileIcon}><FileText size={28} /></div>
                </div>
                <div className={styles.fileShadow} />
              </motion.div>
            </div>

            <div className={styles.right}>
              <span className={styles.badge}>Portafolio Corporativo</span>
              <h3>Descargue nuestro portafolio completo</h3>
              <p>Conozca en detalle todos nuestros servicios, certificaciones, clientes y propuestas comerciales en un documento profesional.</p>
              <div className={styles.buttons}>
                <motion.a
                  href="/portafolio-jms-seguridad.pdf"
                  download
                  className={styles.btnPrimary}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  Seguridad & Vigilancia
                </motion.a>
                <motion.a
                  href="/portafolio-jms-jardineria.pdf"
                  download
                  className={styles.btnSecondary}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  Jardinería & Aseo
                </motion.a>
              </div>
              <a href="#contacto" className={styles.link}>
                O solicite uno personalizado <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
