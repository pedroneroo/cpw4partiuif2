import React from 'react'
import styles from './Toast.module.css'

// Componente reutilizável de notificação
function Toast({ message, type = 'info' }) {
  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert" aria-live="polite">
      <span className={styles.message}>{message}</span>
    </div>
  )
}

export default Toast
