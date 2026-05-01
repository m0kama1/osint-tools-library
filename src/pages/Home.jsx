import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import ToolCard from '../components/ToolCard'
import ToolModal from '../components/ToolModal'
import categories from '../data/categories'
import * as Icons from 'lucide-react'

export default function Home({
  tools, filteredTools, toggleFavorite, isFavorite,
  searchQuery, setSearchQuery, setActiveCategory,
  selectedTool, setSelectedTool,
}) {
  const featured = tools.slice(0, 8)

  return (
    <>
      <Hero setSearchQuery={setSearchQuery} setActiveCategory={setActiveCategory} />
      <StatsSection />

      {/* Featured Tools */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Featured Tools</h2>
            <p className="section-subtitle">Popular tools to get you started</p>
          </div>
          <Link to="/tools" className="btn-ghost text-blue-600 hover:bg-blue-50">
            View all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={isFavorite(tool.id)}
              toggleFavorite={toggleFavorite}
              onClick={() => setSelectedTool(tool)}
            />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">Browse by Category</h2>
              <p className="section-subtitle">27 specialized intelligence categories</p>
            </div>
            <Link to="/categories" className="btn-ghost text-blue-600 hover:bg-blue-50">
              All categories <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.filter(c => c.id !== 'all').map((cat, i) => {
              const Icon = Icons[cat.icon] || Icons.Circle
              const count = tools.filter(t => t.category === cat.id).length
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <Link
                    to="/tools"
                    onClick={() => setActiveCategory(cat.id)}
                    className="card p-4 flex flex-col items-center text-center gap-2 hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 block"
                  >
                    <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 leading-tight">{cat.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{count} tools</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-hero rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Investigate?</h2>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto text-sm">
              Browse 150+ curated OSINT tools organized into 27 categories for every type of digital investigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/tools" className="btn-primary text-base px-7 py-3">Explore All Tools</Link>
              <Link to="/methodology" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white/10 border border-white/15 text-white font-semibold text-base hover:bg-white/20 transition-all">
                View Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ToolModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
        isFavorite={selectedTool ? isFavorite(selectedTool.id) : false}
        toggleFavorite={toggleFavorite}
      />
    </>
  )
}
