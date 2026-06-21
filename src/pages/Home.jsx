import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import Button from '../components/ui/Button'
import CourseCard from '../components/ui/CourseCard'
import { COURSES } from '../data/courses'

function StatCard({ value, label }) {
  return (
    <div className={styles.statCard}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function Home() {
  const navigate = useNavigate()
  const featured = COURSES.slice(0, 3)

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.pill}>🌿 Campus Aquidauana · MS</span>
            <h1 className={styles.heroTitle}>
              Seu futuro começa no <span className={styles.highlight}>IFMS</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Ensino público, gratuito e de qualidade. Conheça os cursos técnicos
              e dê o primeiro passo numa carreira que transforma vidas.
            </p>
            <div className={styles.heroCta}>
              <Button size="lg" onClick={() => navigate('/cursos')}>
                Ver todos os cursos →
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/sobre')}>
                Conhecer o IFMS
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.floatCard} style={{ '--delay': '0s' }}>💻 Informática</div>
            <div className={styles.floatCard} style={{ '--delay': '0.4s' }}>🌱 Agropecuária</div>
            <div className={styles.floatCard} style={{ '--delay': '0.8s' }}>📊 Administração</div>
            <div className={styles.floatCard} style={{ '--delay': '1.2s' }}>🏗️ Edificações</div>
            <div className={styles.floatCard} style={{ '--delay': '1.6s' }}>🍃 Alimentos</div>
            <div className={styles.floatCard} style={{ '--delay': '2s' }}>🌿 Meio Ambiente</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <StatCard value="6+" label="Cursos técnicos" />
            <StatCard value="100%" label="Gratuito" />
            <StatCard value="3 anos" label="de formação integrada" />
            <StatCard value="1962" label="Fundação do IFMS" />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cursos em destaque</h2>
            <Button variant="ghost" onClick={() => navigate('/cursos')}>Ver todos →</Button>
          </div>
          <div className={styles.grid}>
            {featured.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.banner}>
        <div className="container">
          <div className={styles.bannerInner}>
            <div>
              <h2>Pronto para ingressar?</h2>
              <p>As inscrições para o processo seletivo são abertas todo ano. Fique de olho!</p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open('https://www.ifms.edu.br/acesso-rapido/processos-seletivos', '_blank')}
            >
              Ver processo seletivo 🔗
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
