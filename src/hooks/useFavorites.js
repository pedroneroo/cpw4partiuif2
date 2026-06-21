import { useState, useCallback } from 'react'
import { getFavorites, toggleFavorite, isFavorite } from '../utils/localStorage'

// Hook customizado: gerencia favoritos com estado reativo
export function useFavorites() {
  const [favorites, setFavorites] = useState(() => getFavorites())

  const toggle = useCallback((courseId) => {
    const updated = toggleFavorite(courseId)
    setFavorites(updated)
    return updated.includes(courseId)
  }, [])

  const checkFavorite = useCallback((courseId) => {
    return isFavorite(courseId)
  }, [])

  return { favorites, toggle, checkFavorite }
}
