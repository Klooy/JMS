import { Shield, Leaf, Phone, Mail, MapPin } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>
              <div className={styles.brandIcon}>
                <Shield size={16} />
                <Leaf size={16} />
              </div>
              <div>
                <h3>CONSERJERÍA <strong>JMS</strong></h3>
                <span>S.A.S.</span>
              </div>
            </div>
            <p className={styles.nit}>NIT: 901913087-7</p>
            <p className={styles.slogan}>"Servimos con gratitud"</p>
          </div>

          <div className={styles.col}>
            <h4>Servicios</h4>
            <ul>
              <li><a href="#vigilancia">Seguridad & Conserjería</a></li>
              <li><a href="#jardineria">Aseo & Limpieza</a></li>
              <li><a href="#jardineria">Jardinería & Paisajismo</a></li>
              <li><a href="#jardineria">Mantenimiento Integral</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#ubicacion">Ubicación</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contacto</h4>
            <ul>
              <li className={styles.contactItem}><Phone size={14} /> 607 548 9078</li>
              <li className={styles.contactItem}><Phone size={14} /> 314 331 1791</li>
              <li className={styles.contactItem}><Mail size={14} /> contabilidadjmse@gmail.com</li>
              <li className={styles.contactItem}><MapPin size={14} /> Cúcuta, Norte de Santander</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Conserjería JMS S.A.S. Todos los derechos reservados.</p>
          <p>Ciro Alfonso Soto Rozo — Representante Legal</p>
        </div>
      </div>
    </footer>
  )
}
