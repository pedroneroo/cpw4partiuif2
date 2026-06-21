import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './CourseDetail.module.css'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { COURSES } from '../data/courses'
import { useFavorites } from '../hooks/useFavorites'
import { useApp } from '../context/AppContext'
import { markVisited } from '../utils/localStorage'

function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { toggle, favorites } = useFavorites()
  const { showToast } = useApp()

  const course = COURSES.find(c => c.id === id)
  const isFav = favorites.includes(id)

  useEffect(() => {
    if (course) {
      markVisited(course.id)
      document.title = `${course.title} · PartiuIF`
    }
    return () => { document.title = 'PartiuIF — Cursos do IFMS' }
  }, [course])

  if (!course) {
    return (
      <div className={styles.notFound}>
        <p>Curso não encontrado.</p>
        <Button onClick={() => navigate('/cursos')}>← Voltar para cursos</Button>
      </div>
    )
  }

  function handleFavorite() {
    const added = toggle(course.id)
    showToast(added ? `❤️ ${course.title} favoritado!` : `💔 Removido dos favoritos`, added ? 'success' : 'info')
  }

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.hero} style={{ '--course-color': course.color }}>
        <div className="container">
          <button className={styles.back} onClick={() => navigate('/cursos')}>
            ← Voltar para cursos
          </button>
          <div className={styles.heroContent}>
            <span className={styles.bigIcon} aria-hidden="true">{course.icon}</span>
            <div>
              <div className={styles.badges}>
                <Badge color={course.color}>{course.area}</Badge>
                <Badge color="#64748B">{course.type}</Badge>
                <Badge color="#64748B">{course.shift}</Badge>
              </div>
              <h1 className={styles.title}>{course.title}</h1>
              <p className={styles.campus}>📍 IFMS Campus Aquidauana</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="container">
        <div className={styles.content}>
          {/* INFO CARDS */}
          <div className={styles.infoGrid}>
            {[
              { label: 'Duração', value: course.duration, icon: '⏱️' },
              { label: 'Modalidade', value: course.type, icon: '📋' },
              { label: 'Turno', value: course.shift, icon: '🌅' },
              { label: 'Vagas', value: `${course.vacancies} vagas/ano`, icon: '👥' },
            ].map(item => (
              <div key={item.label} className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">{item.icon}</span>
                <div>
                  <p className={styles.infoLabel}>{item.label}</p>
                  <p className={styles.infoValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SOBRE */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Sobre o curso</h2>
            <p className={styles.description}>{course.description}</p>
          </section>

          {/* CONTEÚDOS */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>O que você vai estudar</h2>
            <ul className={styles.topicsList}>
              {course.topics.map(topic => (
                <li key={topic} className={styles.topic} style={{ '--topic-color': course.color }}>
                  <span aria-hidden="true">✓</span> {topic}
                </li>
              ))}
            </ul>
          </section>

          {/* PERFIL */}
          <section className={styles.profileSection} style={{ '--course-color': course.color }}>
            <div>
              <h2 className={styles.sectionTitle}>Perfil do estudante</h2>
              <p>{course.profile}</p>
            </div>
            <span className={styles.profileIcon} aria-hidden="true">🎯</span>
          </section>

          {/* AÇÕES */}
          <div className={styles.actions}>
            <Button onClick={handleFavorite} variant={isFav ? 'danger' : 'secondary'}>
              {isFav ? '💔 Remover favorito' : '❤️ Favoritar este curso'}
            </Button>
            <Button
              onClick={() => window.open('https://www.ifms.edu.br/acesso-rapido/processos-seletivos', '_blank')}
            >
              Quero me inscrever →
            </Button>
            <Button variant="outline" onClick={() => navigate('/cursos')}>
              ← Ver outros cursos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
