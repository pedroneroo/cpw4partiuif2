import React from 'react'
import styles from './Badge.module.css'

function Badge({ children, color }) {
  return (
    <span className={styles.badge} style={{ '--badge-color': color }}>
      {children}
    </span>
  )
}

export default Badge
