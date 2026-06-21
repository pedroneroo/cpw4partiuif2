import React from 'react'
import styles from './Input.module.css'

// Componente genérico reutilizável de input
function Input({ label, id, placeholder, value, onChange, type = 'text', icon, error, ...rest }) {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <div className={`${styles.inputWrap} ${error ? styles.hasError : ''}`}>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
          {...rest}
        />
      </div>
      {error && <p className={styles.error} role="alert">{error}</p>}
    </div>
  )
}

export default Input
