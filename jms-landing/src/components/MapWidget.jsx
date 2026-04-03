import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react'
import styles from './MapWidget.module.css'

export default function MapWidget() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const address = 'Calle 11 Entre Av. 5 Y 4 Loc. 3 32, El Centro, Cúcuta, Norte de Santander, Colombia'
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0!2d-72.5078!3d7.8891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645a7b0c0f0%3A0x0!2sCalle+11+Av+5+Y+4+Cucuta!5e0!3m2!1ses!2sco!4v1`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=7.8891,-72.5078&travelmode=driving`

  return (
    <section className={styles.section} id="ubicacion" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Ubicación</span>
          <h2>Encuéntranos</h2>
          <p>Visítanos en el corazón de Cúcuta</p>
        </motion.div>

        <motion.div
          className={styles.widget}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Map */}
          <div className={styles.mapContainer}>
            <div className={styles.mapInner}>
              {!mapLoaded && (
                <div className={styles.mapPlaceholder}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin size={48} />
                  </motion.div>
                  <p>Cargando mapa...</p>
                </div>
              )}
              {inView && (
                <iframe
                  src={mapsUrl}
                  className={styles.iframe}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Conserjería JMS"
                  onLoad={() => setMapLoaded(true)}
                  style={{ opacity: mapLoaded ? 1 : 0 }}
                />
              )}
            </div>

            {/* Floating pin marker */}
            <motion.div
              className={styles.floatingPin}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={styles.pinDot} />
              <div className={styles.pinPulse} />
            </motion.div>
          </div>

          {/* Info Panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={22} />
              </div>
              <div>
                <h4>Dirección</h4>
                <p>{address}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Clock size={22} />
              </div>
              <div>
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 8:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone size={22} />
              </div>
              <div>
                <h4>Teléfonos</h4>
                <p>607 548 9078 · 314 331 1791</p>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsBtn}
              >
                <Navigation size={18} />
                Cómo llegar
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapsLink}
              >
                <ExternalLink size={16} />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
