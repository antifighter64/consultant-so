'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const features = [
  {
    icon: '🎯',
    title: 'Linkbait Scanner',
    desc: 'Paste any URL — get an AI score from 1–10 with a full breakdown of why it does or doesn\'t earn links.',
    badge: 'Free tier: 3/mo',
  },
  {
    icon: '💡',
    title: 'Idea Generator',
    desc: 'Enter your niche and competitors. Get 10 custom linkbait ideas ranked by link potential.',
    badge: 'Pro+',
  },
  {
    icon: '🕵️',
    title: 'Competitor Link Spy',
    desc: 'See exactly which pages on any competitor domain are earning the most backlinks — and replicate them.',
    badge: 'Pro+',
  },
  {
    icon: '🤖',
    title: 'FreeLinks Automation',
    desc: 'Auto-submit your best assets to 30+ free directories, aggregators, and resource pages with one click.',
    badge: 'Growth+',
  },
  {
    icon: '📡',
    title: 'AEO + GEO Tracker',
    desc: 'Track where you appear in AI answers (ChatGPT, Perplexity, Google AI) and map your geo visibility.',
    badge: 'Growth+',
  },
  {
    icon: '📊',
    title: 'GSC Integration',
    desc: 'Connect Google Search Console → fix titles, descriptions, internal links, and long-tail gaps automatically.',
    badge: 'Pro+',
  },
]

const pricing = [
  {
    name: 'Pro',
    price: '$99',
    period: '/mo',
    highlight: false,
    features: ['Linkbait Scanner (unlimited)', 'Idea Generator', 'Competitor Spy (5 domains)', 'GSC Integration', 'Asset Database', '7-day free trial'],
  },
  {
    name: 'Growth',
    price: '$199',
    period: '/mo',
    highlight: true,
    badge: 'Most Popular',
    features: ['Everything in Pro', 'AEO + GEO Tracker', 'FreeLinks Automation (30+ dirs)', 'Social Auto-Post Queue', 'Headline Engine', 'Embed Code Generator'],
  },
  {
    name: 'Agency',
    price: '$499',
    period: '/mo',
    highlight: false,
    features: ['Everything in Growth', 'White-label PDF Reports', 'API Access', '10 Client Seats', 'Monthly Strategy Call', 'Custom Linkbait Queue'],
  },
]

const stats = [
  { value: '10M+', label: 'Links analyzed' },
  { value: '50K+', label: 'Ideas generated' },
  { value: '30+', label: 'Auto-submit directories' },
  { value: '4.9★', label: 'Beta rating' },
]

export default function Home() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      router.push('/waitlist-confirmed')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-white text-gray-900">

      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-xl font-black tracking-tight">
          Linkbaits<span className="text-indigo-600">.com</span>
        </span>
        <a
          href="#waitlist"
          className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
          Now accepting waitlist signups
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
          The Linkbait Platform<br />
          <span className="text-indigo-600">That Gets You Cited</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI tools to create, score, and automate content people link to.
          Beat Semrush and Ahrefs at the one thing they can&apos;t do — <strong className="text-gray-700">build your linkbait for you</strong>.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-indigo-600">{s.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA scroll */}
        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          Get Early Access — Free
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <p className="text-xs text-gray-400 mt-3">No credit card required for waitlist · Early members get 20% off</p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">What&apos;s inside</p>
            <h2 className="text-3xl font-black">Everything Semrush can&apos;t do</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Semrush tracks links. Ahrefs analyzes links. Linkbaits.com <em>creates</em> them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{f.title}</h3>
                  <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{f.badge}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">The workflow</p>
          <h2 className="text-3xl font-black">From zero links to link magnet in 4 steps</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Scan', desc: 'Score your existing content. Find what\'s linkable and what\'s not.' },
            { step: '02', title: 'Create', desc: 'AI generates 10 custom linkbait ideas ranked by potential.' },
            { step: '03', title: 'Publish', desc: 'Build the asset — stats page, tool, infographic, or article.' },
            { step: '04', title: 'Automate', desc: 'FreeLinks submits it to 30+ directories. Social queue blasts it out.' },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="text-4xl font-black text-indigo-100 mb-2">{s.step}</div>
              <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing preview */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl font-black">Simple, transparent pricing</h2>
            <p className="text-gray-500 mt-3">All plans include a 7-day free trial. Early waitlist members get 20% off for life.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-xl p-6 border ${
                  p.highlight
                    ? 'border-indigo-500 bg-indigo-600 text-white shadow-xl shadow-indigo-200'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                )}
                <div className="mb-4">
                  <p className={`text-sm font-semibold mb-1 ${p.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>{p.name}</p>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-4xl font-black">{p.price}</span>
                    <span className={`text-sm ${p.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>{p.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className={`w-4 h-4 shrink-0 ${p.highlight ? 'text-indigo-200' : 'text-indigo-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={p.highlight ? 'text-indigo-100' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`block text-center text-sm font-bold py-2.5 rounded-lg transition-colors ${
                    p.highlight
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  Join Waitlist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Early access</p>
            <h2 className="text-4xl font-black mb-3">Secure your spot</h2>
            <p className="text-gray-500">Join the waitlist. Be first in. Lock in 20% off for life.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full name <span className="text-red-400">*</span></label>
              <input
                type="text"
                required
                placeholder="Boris Kreiman"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Work email <span className="text-red-400">*</span></label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone number <span className="text-red-400">*</span>
                <span className="text-xs text-gray-400 font-normal ml-1">(for onboarding call)</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+1 (917) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Website <span className="text-gray-400 font-normal text-xs">(optional — we&apos;ll pre-scan it)</span>
              </label>
              <input
                type="url"
                placeholder="https://yoursite.com"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-lg shadow-indigo-200"
            >
              {loading ? 'Joining...' : 'Join the Waitlist — Free →'}
            </button>
            <p className="text-xs text-center text-gray-400">
              No credit card · No spam · Unsubscribe anytime
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 text-center">
        <p className="text-sm font-black tracking-tight mb-2">
          Linkbaits<span className="text-indigo-600">.com</span>
        </p>
        <p className="text-xs text-gray-400">© 2026 Linkbaits.com · The Linkbait Platform That Gets You Cited</p>
      </footer>

    </main>
  )
}
