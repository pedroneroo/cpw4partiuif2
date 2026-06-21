import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>🎓 PartiuIF</span>
          <p>Seu primeiro passo no Instituto Federal de Mato Grosso do Sul.</p>
        </div>
        <div className={styles.links}>
          <h4>Links úteis</h4>
          <a href="https://www.ifms.edu.br" target="_blank" rel="noopener noreferrer">Site oficial do IFMS</a>
          <a href="https://www.ifms.edu.br/acesso-rapido/processos-seletivos" target="_blank" rel="noopener noreferrer">Processos seletivos</a>
          <a href="https://www.ifms.edu.br/campi/campus-aquidauana" target="_blank" rel="noopener noreferrer">Campus Aquidauana</a>
        </div>
        <div className={styles.contact}>
          <h4>Contato</h4>
          <p>📍 Aquidauana, MS</p>
          <p>📞 (67) 3241-3232</p>
          <p>📧 aquidauana@ifms.edu.br</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} PartiuIF · Projeto educacional IFMS · Feito em React</p>
      </div>
    </footer>
  )
}

export default Footer
