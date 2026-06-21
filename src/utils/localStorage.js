// Utilitário de LocalStorage (SOLID: SRP - cada função tem uma responsabilidade)

const KEYS = {
  FAVORITES: 'partiu_if_favorites',
  SEARCH_HISTORY: 'partiu_if_search_history',
  VISITED: 'partiu_if_visited_courses',
}

// Genérico — salvar
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

// Genérico — ler
export function readFromStorage(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

// Favoritos
export function getFavorites() {
  return readFromStorage(KEYS.FAVORITES, [])
}

export function toggleFavorite(courseId) {
  const favs = getFavorites()
  const updated = favs.includes(courseId)
    ? favs.filter(id => id !== courseId)
    : [...favs, courseId]
  saveToStorage(KEYS.FAVORITES, updated)
  return updated
}

export function isFavorite(courseId) {
  return getFavorites().includes(courseId)
}

// Histórico de busca
export function getSearchHistory() {
  return readFromStorage(KEYS.SEARCH_HISTORY, [])
}

export function addToSearchHistory(term) {
  if (!term.trim()) return
  const history = getSearchHistory()
  const updated = [term, ...history.filter(t => t !== term)].slice(0, 5)
  saveToStorage(KEYS.SEARCH_HISTORY, updated)
}

// Cursos visitados
export function markVisited(courseId) {
  const visited = readFromStorage(KEYS.VISITED, [])
  if (!visited.includes(courseId)) {
    saveToStorage(KEYS.VISITED, [...visited, courseId])
  }
}

export function getVisited() {
  return readFromStorage(KEYS.VISITED, [])
}
