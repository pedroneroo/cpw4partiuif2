import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './About.module.css'
import Button from '../components/ui/Button'

function ValueCard({ icon, title, description }) {
  return (
    <div className={styles.valueCard}>
      <span className={styles.valueIcon} aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function TimelineItem({ year, event }) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineYear}>{year}</div>
      <div className={styles.timelineDot} aria-hidden="true" />
      <div className={styles.timelineContent}>{event}</div>
    </div>
  )
}

function About() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Sobre o <span>IFMS</span></h1>
          <p className={styles.heroSub}>
            O Instituto Federal de Mato Grosso do Sul é uma instituição de ensino público,
            gratuito e de excelência que transforma vidas pelo Brasil.
          </p>
        </div>
      </section>

      <div className="container">
        {/* MISSÃO */}
        <section className={styles.section}>
          <div className={styles.missionGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Nossa missão</h2>
              <p>
                O IFMS tem como missão oferecer educação profissional e tecnológica de excelência,
                comprometida com a formação humana integral, a produção e difusão de conhecimento,
                promovendo o desenvolvimento sustentável.
              </p>
              <p>
                O Campus Aquidauana está localizado às margens do Pantanal, o maior bioma
                alagável do mundo, o que nos torna referência em formações ligadas ao meio
                ambiente, agropecuária e recursos naturais.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionStat}>
                <strong>22</strong><span>campi no MS</span>
              </div>
              <div className={styles.missionStat}>
                <strong>30mil+</strong><span>estudantes</span>
              </div>
              <div className={styles.missionStat}>
                <strong>100+</strong><span>cursos ofertados</span>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nossos valores</h2>
          <div className={styles.valuesGrid}>
            <ValueCard icon="🎓" title="Excelência" description="Ensino de qualidade reconhecido nacional e internacionalmente." />
            <ValueCard icon="🤝" title="Inclusão" description="Acesso democrático ao ensino para todos os brasileiros." />
            <ValueCard icon="🌿" title="Sustentabilidade" description="Formação comprometida com o meio ambiente e o Pantanal." />
            <ValueCard icon="🚀" title="Inovação" description="Pesquisa e tecnologia a serviço do desenvolvimento regional." />
          </div>
        </section>

        {/* TIMELINE */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nossa história</h2>
          <div className={styles.timeline}>
            <TimelineItem year="1962" event="Fundação da Escola Agrotécnica Federal de Aquidauana, precursora do campus." />
            <TimelineItem year="2008" event="Criação dos Institutos Federais pelo governo federal — IFMS nasce oficialmente." />
            <TimelineItem year="2010" event="Campus Aquidauana inaugura novos laboratórios e amplia oferta de cursos." />
            <TimelineItem year="2015" event="Expansão com novos cursos técnicos integrados ao Ensino Médio." />
            <TimelineItem year="2024" event="IFMS Aquidauana consolida-se como referência em educação profissional no Pantanal." />
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Pronto para fazer parte?</h2>
          <p>Explore os cursos disponíveis e comece sua jornada no IFMS.</p>
          <Button size="lg" onClick={() => navigate('/cursos')}>
            Conhecer os cursos →
          </Button>
        </section>
      </div>
    </div>
  )
}

export default About
