import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const PRICING = ['Free', 'Freemium', 'Paid']
const DIFFICULTY = ['Beginner', 'Intermediate', 'Advanced']
const PLATFORMS = ['Web', 'CLI', 'Desktop', 'Mobile', 'API', 'Web / API', 'Web / Mobile', 'Self-hosted', 'Windows']

function FilterGroup({ label, options, selected, onChange }) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{label}</h4>
      <div className="flex flex-wrap gap-1.5">
        {options.map(opt => {
          const active = selected.includes(opt)
          return (
            <button
              key={opt}
              onClick={() => onChange(active ? selected.filter(s => s !== opt) : [...selected, opt])}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all duration-150 ${
                active
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function FilterPanel({ filters, setFilters, resultCount, totalCount }) {
  const [open, setOpen] = useState(false)
  const activeCount = filters.pricing.length + filters.difficulty.length + filters.platform.length

  const clearAll = () => setFilters({ pricing: [], difficulty: [], platform: [] })

  return (
    <div className="bg-white border border-slate-100 rounded-xl shadow-card">
      {/* Header */}
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors"
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={15} className="text-slate-500" />
          <span className="text-sm font-semibold text-slate-700">Filters</span>
          {activeCount > 0 && (
            <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full min-w-[18px] text-center">
              {activeCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-medium">{resultCount} of {totalCount}</span>
          <ChevronDown size={14} className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t border-slate-50 pt-3">
              <FilterGroup
                label="Pricing"
                options={PRICING}
                selected={filters.pricing}
                onChange={v => setFilters(f => ({ ...f, pricing: v }))}
              />
              <FilterGroup
                label="Difficulty"
                options={DIFFICULTY}
                selected={filters.difficulty}
                onChange={v => setFilters(f => ({ ...f, difficulty: v }))}
              />
              <FilterGroup
                label="Platform"
                options={PLATFORMS}
                selected={filters.platform}
                onChange={v => setFilters(f => ({ ...f, platform: v }))}
              />
              {activeCount > 0 && (
                <button
                  onClick={clearAll}
                  className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
                >
                  <X size={12} /> Clear all filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
