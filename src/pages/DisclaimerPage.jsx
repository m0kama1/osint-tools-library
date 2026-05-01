import { Shield, AlertTriangle, Scale, Eye, UserX, FileWarning } from 'lucide-react'

const sections = [
  {
    icon: Shield,
    title: "Purpose & Scope",
    color: "text-blue-600",
    bg: "bg-blue-50",
    content: "This OSINT Tools Library is provided exclusively for educational, research, cybersecurity, and lawful investigation purposes. The library aims to help investigators, journalists, lawyers, digital forensics specialists, and cybersecurity professionals discover tools relevant to their lawful work.",
  },
  {
    icon: Scale,
    title: "Legal Responsibility",
    color: "text-violet-600",
    bg: "bg-violet-50",
    content: "Users of this library are solely responsible for ensuring their use of any listed tool complies with all applicable local, national, and international laws, regulations, and platform terms of service. The creator of this library does not endorse, encourage, or facilitate any unlawful activity.",
  },
  {
    icon: Eye,
    title: "Data Privacy",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    content: "OSINT activities must respect applicable data protection and privacy laws, including GDPR, CCPA, and other regional frameworks. Investigators must have a lawful basis for processing personal data obtained through OSINT techniques.",
  },
  {
    icon: UserX,
    title: "Prohibited Uses",
    color: "text-red-600",
    bg: "bg-red-50",
    content: "This library must NOT be used for: stalking, harassment, or intimidation; unauthorized surveillance; identity theft; illegal data harvesting; any activity that violates applicable laws; any activity intended to harm individuals or organizations.",
  },
  {
    icon: FileWarning,
    title: "No Warranty",
    color: "text-amber-600",
    bg: "bg-amber-50",
    content: "All tool information is provided 'as is' without warranty of any kind. Tool availability, features, pricing, and capabilities may change at any time. The library creator makes no representations about the accuracy, completeness, or fitness for any particular purpose of the information provided.",
  },
  {
    icon: AlertTriangle,
    title: "Third-Party Tools",
    color: "text-orange-600",
    bg: "bg-orange-50",
    content: "This library contains links to third-party websites and tools. We are not responsible for the content, privacy practices, or terms of service of those external tools. Users should review the terms and conditions of each tool independently before use.",
  },
]

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-14 h-14 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <AlertTriangle size={24} className="text-amber-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Legal & Ethical Disclaimer</h1>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          Please read this disclaimer carefully before using the OSINT Tools Library.
        </p>
      </div>

      {/* Main disclaimer box */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-amber-900 text-sm font-semibold text-center leading-relaxed">
          "This library is provided for educational, research, cybersecurity, and lawful investigation purposes only. Users are responsible for complying with all applicable laws, platform policies, and ethical standards."
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map(section => (
          <div key={section.title} className="card p-5">
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 ${section.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <section.icon size={18} className={section.color} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{section.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-xs">
          By using this library, you acknowledge that you have read, understood, and agree to comply with this disclaimer.
        </p>
        <p className="text-slate-400 text-xs mt-1">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  )
}
