import { motion } from 'framer-motion'
import { Search, Target, Database, FileText, Shield, ChevronRight, Lightbulb, AlertTriangle } from 'lucide-react'

const steps = [
  {
    icon: Target,
    title: "1. Define Objectives",
    color: "bg-blue-500",
    description: "Clearly define what you're trying to find, who or what is your subject, and what evidence or information you need. Set the legal scope of your investigation before collecting any data.",
    tips: ["Identify the subject (person, organization, domain, etc.)", "Define legal boundaries and jurisdiction", "Determine what constitutes valid evidence", "Document your authorization if applicable"],
  },
  {
    icon: Search,
    title: "2. Passive Reconnaissance",
    color: "bg-violet-500",
    description: "Start with purely passive methods that don't interact with the target directly. Collect publicly available data without alerting the subject.",
    tips: ["Search engines with advanced operators (site:, filetype:, inurl:)", "Social media public posts and profiles", "WHOIS and DNS records", "Cached pages and archived content"],
  },
  {
    icon: Database,
    title: "3. Data Collection & Correlation",
    color: "bg-cyan-500",
    description: "Gather data from multiple sources and begin correlating information to build a complete picture. Use specialized OSINT tools for each category of data.",
    tips: ["Cross-reference information across multiple sources", "Use username search tools to pivot across platforms", "Aggregate metadata from documents and images", "Map relationships between entities"],
  },
  {
    icon: FileText,
    title: "4. Analysis & Verification",
    color: "bg-amber-500",
    description: "Critically analyze collected data for accuracy, relevance, and reliability. Verify information through multiple independent sources before drawing conclusions.",
    tips: ["Verify each piece of information independently", "Document sources and timestamps", "Identify potential disinformation or false leads", "Build timelines of events"],
  },
  {
    icon: Shield,
    title: "5. Report & Document",
    color: "bg-green-500",
    description: "Compile findings into a structured, documented report. Preserve digital evidence properly and maintain a clear chain of custody for legal proceedings.",
    tips: ["Preserve screenshots with timestamps", "Document tool versions and methodologies used", "Maintain chain of custody for evidence", "Follow your organization's reporting standards"],
  },
]

const principles = [
  { title: "Lawfulness", desc: "Only access publicly available information. Never attempt unauthorized access to systems, accounts, or data." },
  { title: "Proportionality", desc: "Collect only the data necessary for your specific investigation objective." },
  { title: "Accuracy", desc: "Verify information from multiple sources before drawing conclusions." },
  { title: "Confidentiality", desc: "Handle sensitive information appropriately and share only on a need-to-know basis." },
]

export default function Methodology() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4">
          <Lightbulb size={12} /> OSINT Methodology
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">How to Use OSINT Tools</h1>
        <p className="text-slate-500 text-base max-w-xl mx-auto">
          A structured approach to open-source intelligence gathering for professional investigations.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 mb-10">
        <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-amber-800 text-sm">
          <strong>Always operate within legal boundaries.</strong> OSINT involves collecting publicly available information. Unauthorized access to private systems or data is illegal regardless of intent.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6 mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                <step.icon size={19} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-500 text-sm mb-3 leading-relaxed">{step.description}</p>
                <ul className="space-y-1.5">
                  {step.tips.map(tip => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-slate-600">
                      <ChevronRight size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core principles */}
      <div className="bg-slate-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Core Ethical Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map(p => (
            <div key={p.title} className="bg-white rounded-xl p-4 border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-sm mb-1">{p.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
