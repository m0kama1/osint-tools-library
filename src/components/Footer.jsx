import { Link } from 'react-router-dom'
import { Shield, Github, Heart, ExternalLink } from 'lucide-react'

const navGroups = [
  {
    label: 'Library',
    links: [
      { to: '/tools', label: 'All Tools' },
      { to: '/categories', label: 'Categories' },
      { to: '/favorites', label: 'My Favorites' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { to: '/methodology', label: 'Methodology' },
      { to: '/disclaimer', label: 'Legal Disclaimer' },
      { to: '/about', label: 'About' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <Shield size={17} className="text-white" />
              </div>
              <div>
                <span className="block text-white font-bold text-base">OSINT Tools Library</span>
                <span className="text-blue-400 text-[10px] font-medium tracking-widest uppercase">Intelligence Resources</span>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mb-4">
              An interactive library of open-source intelligence tools for cyber investigations, digital research, and online evidence collection.
            </p>
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              Created with <Heart size={11} className="text-red-400 fill-red-400" /> by{' '}
              <span className="text-blue-400 font-semibold">Mohamed Kamal</span>
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map(group => (
            <div key={group.label}>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">{group.label}</h4>
              <ul className="space-y-2">
                {group.links.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-500 hover:text-slate-200 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} OSINT Tools Library · Educational and lawful investigation use only.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/disclaimer" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Disclaimer
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
