import * as React from "react"
import { X } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this to your backend/email service
    console.log("Submitted:", { name, email })
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center">
            <h3 className="font-display text-2xl font-medium text-slate-900 mb-4">
              Thank you for joining our waitlist!
            </h3>
            <p className="text-slate-600 mb-6">
              We'll notify you as soon as we're ready to take on new clients.
            </p>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-2xl font-medium text-slate-900 mb-4">
              Join Our Waitlist
            </h3>
            <p className="text-slate-600 mb-6">
              Due to overwhelming demand, we are not taking on new clients for the next 30 days. Join our waitlist to be notified when we open up new spots.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300/50"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Join Waitlist
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
} 