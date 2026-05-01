import { motion } from 'framer-motion'
import { Heart, ExternalLink, Copy, CheckCheck, Tag, Star } from 'lucide-react'
import { useState } from 'react'
import categories from '../data/categories'

const pricingColors = {
  'Free': 'bg-green-50 text-green-700 border-green-200',
  'Freemium': 'bg-blue-50 text-blue-700 border-blue-200',
  'Paid': 'bg-orange-50 text-orange-700 border-orange-200',
}

const difficultyColors = {
  'Beginner': 'text-green-600',
  'Intermediate': 'text-amber-600',
  'Advanced': 'text-red-600',
}

export default function ToolCard({ tool, isFavorite, toggleFavorite, onClick }) {
  const [copied, setCopied] = useState(false)
  const cat = categories.find(c => c.id === tool.category)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(tool.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFav = (e) => {
    e.stopPropagation()
    toggleFavorite(tool.id)
  }

  const handleOpen = (e) => {
    e.stopPropagation()
    window.open(tool.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="card cursor-pointer group flex flex-col p-5 h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3 min-w-0">
          {/* Category icon blob */}
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${cat?.color || 'bg-slate-500'} bg-opacity-10`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cat?.color || 'bg-slate-600'}`}>
              <span className="text-white text-xs font-bold">{tool.name.charAt(0)}</span>
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900 text-sm leading-tight truncate group-hover:text-blue-600 transition-colors">
              {tool.name}
            </h3>
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border mt-1 inline-block ${pricingColors[tool.pricing] || pricingColors['Free']}`}>
              {tool.pricing}
            </span>
          </div>
        </div>

        {/* Favorite button */}
        <button
          onClick={handleFav}
          className={`p-1.5 rounded-lg transition-all flex-shrink-0 ${
            isFavorite
              ? 'text-red-500 bg-red-50'
              : 'text-slate-300 hover:text-red-400 hover:bg-red-50'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={14} className={isFavorite ? 'fill-red-500' : ''} />
        </button>
      </div>

      {/* Category badge */}
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit mb-2 ${cat?.light || 'bg-slate-100 text-slate-600'}`}>
        {tool.category}
      </span>

      {/* Description */}
      <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-3 line-clamp-3">
        {tool.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-400 text-[10px] rounded-full font-medium">
            <Tag size={8} />
            {tag}
          </span>
        ))}
        {tool.tags.length > 3 && (
          <span className="px-2 py-0.5 text-[10px] text-slate-300 font-medium">+{tool.tags.length - 3}</span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-50">
        <span className={`text-[10px] font-semibold ${difficultyColors[tool.difficulty] || 'text-slate-400'}`}>
          ● {tool.difficulty}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={handleCopy}
            title="Copy URL"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
          >
            {copied ? <CheckCheck size={13} className="text-green-500" /> : <Copy size={13} />}
          </button>
          <button
            onClick={handleOpen}
            title="Open tool"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            Open <ExternalLink size={10} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
