import { useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'

export default function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem('disclaimer-dismissed') === 'true')

  if (dismissed) return null

  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3">
        <AlertTriangle size={14} className="text-amber-600 flex-shrink-0" />
        <p className="text-amber-800 text-xs flex-1">
          <strong className="font-semibold">Educational use only.</strong> This library is provided for lawful investigation, cybersecurity research, and educational purposes. Users are responsible for complying with all applicable laws and ethical standards.
        </p>
        <button
          onClick={() => { setDismissed(true); sessionStorage.setItem('disclaimer-dismissed', 'true') }}
          className="text-amber-500 hover:text-amber-700 flex-shrink-0 transition-colors"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
