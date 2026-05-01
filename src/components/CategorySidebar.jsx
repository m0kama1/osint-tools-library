import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import categories from '../data/categories'

export default function CategorySidebar({ activeCategory, setActiveCategory, tools }) {
  const getCount = (catId) => catId === 'all' ? tools.length : tools.filter(t => t.category === catId).length

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-20 bg-white border border-slate-100 rounded-xl shadow-card overflow-hidden">
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Categories</h3>
        </div>
        <nav className="overflow-y-auto max-h-[calc(100vh-10rem)] sidebar-scroll">
          {categories.map(cat => {
            const Icon = Icons[cat.icon] || Icons.Circle
            const count = getCount(cat.id)
            const isActive = activeCategory === cat.id

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-all duration-150 border-l-2 ${
                  isActive
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-blue-100' : 'bg-slate-100'}`}>
                  <Icon size={13} className={isActive ? 'text-blue-600' : 'text-slate-500'} />
                </span>
                <span className="text-sm font-medium truncate flex-1">{cat.name}</span>
                <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
