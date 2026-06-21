import React, { useState, useMemo } from 'react'
import styles from './Courses.module.css'
import CourseCard from '../components/ui/CourseCard'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import EmptyState from '../components/ui/EmptyState'
import { COURSES, AREAS } from '../data/courses'
import { addToSearchHistory } from '../utils/localStorage'

function Courses() {
  const [search, setSearch] = useState('')
  const [activeArea, setActiveArea] = useState('Todos')

  function handleSearch(e) {
    const val = e.target.value
    setSearch(val)
    if (val.length > 2) addToSearchHistory(val)
  }

  function clearFilters() {
    setSearch('')
    setActiveArea('Todos')
  }

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim()
    return COURSES.filter(c => {
      const matchArea = activeArea === 'Todos' || c.area === activeArea
      const matchSearch = !term
        || c.title.toLowerCase().includes(term)
        || c.description.toLowerCase().includes(term)
        || c.area.toLowerCase().includes(term)
        || c.topics.some(t => t.toLowerCase().includes(term))
      return matchArea && matchSearch
    })
  }, [search, activeArea])

  const hasFilters = search !== '' || activeArea !== 'Todos'

  return (
    <div className={styles.page}>
      <div className="container">
        {/* HEADER */}
        <div className={styles.header}>
          <h1 className={styles.title}>Cursos Técnicos</h1>
          <p className={styles.subtitle}>
            Explore as formações do <strong>IFMS Campus Aquidauana</strong> e encontre o curso ideal para você.
          </p>
        </div>

        {/* BUSCA */}
        <div className={styles.searchRow}>
          <Input
            id="search-cursos"
            placeholder="Buscar por nome, área ou disciplina..."
            value={search}
            onChange={handleSearch}
            icon="🔍"
            aria-label="Buscar cursos"
          />
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              ✕ Limpar filtros
            </Button>
          )}
        </div>

        {/* FILTROS POR ÁREA */}
        <div className={styles.filters} role="group" aria-label="Filtrar por área">
          {AREAS.map(area => (
            <button
              key={area}
              className={`${styles.filterBtn} ${activeArea === area ? styles.active : ''}`}
              onClick={() => setActiveArea(area)}
              aria-pressed={activeArea === area}
            >
              {area}
            </button>
          ))}
        </div>

        {/* CONTAGEM */}
        <p className={styles.count} aria-live="polite">
          {filtered.length === 0
            ? 'Nenhum curso encontrado'
            : `${filtered.length} curso${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`}
          {hasFilters && ' com os filtros aplicados'}
        </p>

        {/* GRID */}
        {filtered.length === 0 ? (
          <EmptyState
            icon="🔍"
            title="Nenhum curso encontrado"
            description="Tente outros termos ou limpe os filtros para ver todos os cursos."
            actionLabel="Limpar filtros"
            onAction={clearFilters}
          />
        ) : (
          <div className={styles.grid}>
            {filtered.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses
