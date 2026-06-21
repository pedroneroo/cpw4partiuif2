import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main} id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
