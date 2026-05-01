import { motion } from 'framer-motion'
import { Heart, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'
import ToolCard from '../components/ToolCard'
import ToolModal from '../components/ToolModal'

export default function FavoritesPage({ favoritedTools, toggleFavorite, isFavorite, selectedTool, setSelectedTool }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Heart size={22} className="text-red-500 fill-red-500" />
          <h1 className="section-title">My Favorites</h1>
        </div>
        <p className="section-subtitle">
          {favoritedTools.length > 0
            ? `${favoritedTools.length} saved tool${favoritedTools.length !== 1 ? 's' : ''} — stored locally in your browser`
            : 'Your saved tools appear here'}
        </p>
      </div>

      {favoritedTools.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
            <Heart size={28} className="text-red-300" />
          </div>
          <h3 className="text-lg font-semibold text-slate-700 mb-2">No favorites yet</h3>
          <p className="text-slate-400 text-sm max-w-sm mb-6">
            Click the heart icon on any tool card to save it here for quick access later.
          </p>
          <Link to="/tools" className="btn-primary">Browse Tools</Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favoritedTools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={isFavorite(tool.id)}
              toggleFavorite={toggleFavorite}
              onClick={() => setSelectedTool(tool)}
            />
          ))}
        </div>
      )}

      <ToolModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
        isFavorite={selectedTool ? isFavorite(selectedTool.id) : false}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}
