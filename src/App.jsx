import { useState, useMemo } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllTools from './pages/AllTools'
import Categories from './pages/Categories'
import FavoritesPage from './pages/FavoritesPage'
import Methodology from './pages/Methodology'
import DisclaimerPage from './pages/DisclaimerPage'
import About from './pages/About'
import { useFavorites } from './hooks/useFavorites'
import tools from './data/tools'
import BackToTop from './components/BackToTop'
import DisclaimerBanner from './components/DisclaimerBanner'

export default function App() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [filters, setFilters] = useState({ pricing: [], difficulty: [], platform: [] })
  const [selectedTool, setSelectedTool] = useState(null)

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const q = searchQuery.toLowerCase()
      const matchesSearch = !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.tags.some(t => t.toLowerCase().includes(q)) ||
        tool.useCases.some(u => u.toLowerCase().includes(q))

      const matchesCategory = activeCategory === 'all' || tool.category === activeCategory

      const matchesPricing = filters.pricing.length === 0 || filters.pricing.includes(tool.pricing)
      const matchesDifficulty = filters.difficulty.length === 0 || filters.difficulty.includes(tool.difficulty)
      const matchesPlatform = filters.platform.length === 0 || filters.platform.includes(tool.platform)

      return matchesSearch && matchesCategory && matchesPricing && matchesDifficulty && matchesPlatform
    })
  }, [searchQuery, activeCategory, filters])

  const favoritedTools = useMemo(() => tools.filter(t => isFavorite(t.id)), [favorites])

  const sharedProps = {
    tools,
    filteredTools,
    favoritedTools,
    favorites,
    toggleFavorite,
    isFavorite,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    filters,
    setFilters,
    selectedTool,
    setSelectedTool,
  }

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <DisclaimerBanner />
        <Header favoritesCount={favorites.length} {...sharedProps} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home {...sharedProps} />} />
            <Route path="/tools" element={<AllTools {...sharedProps} />} />
            <Route path="/categories" element={<Categories {...sharedProps} />} />
            <Route path="/favorites" element={<FavoritesPage {...sharedProps} />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  )
}
