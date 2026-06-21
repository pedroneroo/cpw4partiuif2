import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CourseCard.module.css'
import Badge from './Badge'
import { useFavorites } from '../../hooks/useFavorites'
import { useApp } from '../../context/AppContext'
import { markVisited } from '../../utils/localStorage'

function CourseCard({ course }) {
  const navigate = useNavigate()
  const { toggle, favorites } = useFavorites()
  const { showToast } = useApp()
  const isFav = favorites.includes(course.id)

  function handleFavorite(e) {
    e.stopPropagation()
    const added = toggle(course.id)
    showToast(added ? `❤️ ${course.title} favoritado!` : `💔 Removido dos favoritos`, added ? 'success' : 'info')
  }

  function handleClick() {
    markVisited(course.id)
    navigate(`/cursos/${course.id}`)
  }

  return (
    <article
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`Ver detalhes do curso ${course.title}`}
      style={{ '--card-accent': course.color }}
    >
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">{course.icon}</span>
        <button
          className={`${styles.favBtn} ${isFav ? styles.favActive : ''}`}
          onClick={handleFavorite}
          aria-label={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.badges}>
          <Badge color={course.color}>{course.area}</Badge>
          <Badge color="#64748B">{course.shift}</Badge>
        </div>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description.slice(0, 120)}…</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.meta}>
          <span>📅 {course.duration}</span>
          <span>🎓 {course.type}</span>
        </div>
        <span className={styles.link}>Ver mais →</span>
      </div>
    </article>
  )
}

export default CourseCard
