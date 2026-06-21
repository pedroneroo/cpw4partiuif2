import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useApp } from '../../context/AppContext'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isOnline } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Início' },
    { to: '/cursos', label: 'Cursos' },
    { to: '/sobre', label: 'Sobre o IFMS' },
  ]

  function handleNav(to) {
    setOpen(false)
    navigate(to)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <button className={styles.logo} onClick={() => handleNav('/')} aria-label="Ir para início">
          <span className={styles.logoIcon}>🎓</span>
          <span className={styles.logoText}>Partiu<strong>IF</strong></span>
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navegação principal">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => setOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <span className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`}
            title={isOnline ? 'Online' : 'Offline'} aria-label={isOnline ? 'Online' : 'Modo offline'} />
          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  )
}

export default Navbar
