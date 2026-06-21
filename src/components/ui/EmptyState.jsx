import React from 'react'
import styles from './EmptyState.module.css'
import Button from './Button'

// Componente reutilizável de estado vazio
function EmptyState({ icon = '🔍', title, description, actionLabel, onAction }) {
  return (
    <div className={styles.container}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="outline" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
