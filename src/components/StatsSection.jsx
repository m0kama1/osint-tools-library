import { motion } from 'framer-motion'
import { Shield, Layers, Tag, Star, Globe, DollarSign } from 'lucide-react'
import tools from '../data/tools'
import categories from '../data/categories'

export default function StatsSection() {
  const free = tools.filter(t => t.pricing === 'Free').length
  const freemium = tools.filter(t => t.pricing === 'Freemium').length
  const paid = tools.filter(t => t.pricing === 'Paid').length
  const catCount = categories.length - 1 // exclude "all"
  const allTags = [...new Set(tools.flatMap(t => t.tags))]

  const stats = [
    { icon: Shield, label: 'Total Tools', value: tools.length, color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Layers, label: 'Categories', value: catCount, color: 'text-violet-600', bg: 'bg-violet-50' },
    { icon: DollarSign, label: 'Free Tools', value: free, color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Star, label: 'Freemium', value: freemium, color: 'text-amber-600', bg: 'bg-amber-50' },
    { icon: Globe, label: 'Paid Tools', value: paid, color: 'text-orange-600', bg: 'bg-orange-50' },
    { icon: Tag, label: 'Unique Tags', value: allTags.length, color: 'text-pink-600', bg: 'bg-pink-50' },
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">Library at a Glance</h2>
          <p className="section-subtitle">A curated, growing collection of OSINT tools</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card p-5 text-center"
            >
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <s.icon size={20} className={s.color} />
              </div>
              <div className={`text-2xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
