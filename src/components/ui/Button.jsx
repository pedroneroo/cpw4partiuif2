import React from 'react'
import styles from './Button.module.css'

// Componente genérico reutilizável de botão
function Button({ children, variant = 'primary', size = 'md', onClick, disabled, type = 'button', className = '', ...rest }) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
