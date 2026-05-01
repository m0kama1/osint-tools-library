import { AnimatePresence, motion } from 'framer-motion'
import { SearchX, LayoutGrid, List } from 'lucide-react'
import { useState } from 'react'
import CategorySidebar from '../components/CategorySidebar'
import FilterPanel from '../components/FilterPanel'
import SearchBar from '../components/SearchBar'
import ToolCard from '../components/ToolCard'
import ToolModal from '../components/ToolModal'

export default function AllTools({
  tools, filteredTools, toggleFavorite, isFavorite,
  searchQuery, setSearchQuery,
  activeCategory, setActiveCategory,
  filters, setFilters,
  selectedTool, setSelectedTool,
}) {
  const [view, setView] = useState('grid')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="section-title">All OSINT Tools</h1>
        <p className="section-subtitle">Browse and filter the complete library of {tools.length} tools</p>
      </div>

      {/* Search + Filter row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          className="flex-1"
        />
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setView('grid')}
            className={`p-2.5 rounded-lg border transition-all ${view === 'grid' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'}`}
            title="Grid view"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2.5 rounded-lg border transition-all ${view === 'list' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'}`}
            title="List view"
          >
            <List size={16} />
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <CategorySidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          tools={tools}
        />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              resultCount={filteredTools.length}
              totalCount={tools.length}
            />
          </div>

          {/* Mobile category selector */}
          <div className="lg:hidden mb-4">
            <select
              value={activeCategory}
              onChange={e => setActiveCategory(e.target.value)}
              className="input-field"
            >
              <option value="all">All Categories ({tools.length})</option>
              {[...new Set(tools.map(t => t.category))].sort().map(cat => (
                <option key={cat} value={cat}>
                  {cat} ({tools.filter(t => t.category === cat).length})
                </option>
              ))}
            </select>
          </div>

          {/* Results */}
          {filteredTools.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <SearchX size={48} className="text-slate-200 mb-4" />
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No tools found</h3>
              <p className="text-slate-400 text-sm max-w-sm">
                Try adjusting your search query or removing filters to see more results.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); setFilters({ pricing: [], difficulty: [], platform: [] }) }}
                className="mt-4 btn-secondary"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-800">{filteredTools.length}</span> tool{filteredTools.length !== 1 ? 's' : ''} found
                  {activeCategory !== 'all' && <span className="text-blue-600 font-medium"> in "{activeCategory}"</span>}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${searchQuery}-${view}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={view === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'
                    : 'flex flex-col gap-3'
                  }
                >
                  {filteredTools.map(tool => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      isFavorite={isFavorite(tool.id)}
                      toggleFavorite={toggleFavorite}
                      onClick={() => setSelectedTool(tool)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
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
