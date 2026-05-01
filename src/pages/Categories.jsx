import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import categories from '../data/categories'
import ToolModal from '../components/ToolModal'

export default function Categories({ tools, setActiveCategory, toggleFavorite, isFavorite, selectedTool, setSelectedTool }) {
  const cats = categories.filter(c => c.id !== 'all')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">OSINT Categories</h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          {cats.length} specialized categories covering every aspect of open-source intelligence gathering
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cats.map((cat, i) => {
          const Icon = Icons[cat.icon] || Icons.Circle
          const catTools = tools.filter(t => t.category === cat.id)
          const preview = catTools.slice(0, 3)

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="card p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={19} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{cat.name}</h3>
                  <span className="text-xs text-slate-400 font-medium">{catTools.length} tools</span>
                </div>
              </div>

              {/* Preview tools */}
              <div className="space-y-1.5 flex-1 mb-4">
                {preview.map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool)}
                    className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cat.color.replace('bg-', 'bg-')}`} />
                    <span className="text-xs text-slate-600 truncate flex-1 group-hover:text-slate-900">{tool.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                      tool.pricing === 'Free' ? 'bg-green-50 text-green-600' :
                      tool.pricing === 'Freemium' ? 'bg-blue-50 text-blue-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>{tool.pricing}</span>
                  </button>
                ))}
                {catTools.length > 3 && (
                  <p className="text-[11px] text-slate-400 pl-4">+{catTools.length - 3} more tools</p>
                )}
              </div>

              {/* Footer link */}
              <Link
                to="/tools"
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-100 text-xs font-semibold text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                Browse all {catTools.length} tools <ArrowRight size={12} />
              </Link>
            </motion.div>
          )
        })}
      </div>

      <ToolModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
        isFavorite={selectedTool ? isFavorite(selectedTool.id) : false}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}
