import { useState, useEffect } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('osint-favorites')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('osint-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (toolId) => {
    setFavorites(prev =>
      prev.includes(toolId) ? prev.filter(id => id !== toolId) : [...prev, toolId]
    )
  }

  const isFavorite = (toolId) => favorites.includes(toolId)

  return { favorites, toggleFavorite, isFavorite }
}
