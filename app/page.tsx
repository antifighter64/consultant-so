'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const specialties = ['Business Strategy','Fractional CFO','Marketing','Legal','Technology','HR & People','Operations','Sales','Finance','Executive Coaching']

const features = [
  { icon: '🔍', title: 'Find the right fit', desc: 'Filter by specialty, location, rate, and availability. Every consultant is vetted before listing.' },
  { icon: '📅', title: 'Book instantly', desc: 'See real availability and book discovery calls directly from the profile — no back-and-forth.' },
  { icon: '✅', title: 'Verified credentials', desc: 'Verified badges for consultants who pass our vetting process. Know who you\'re hiring.' },
  { icon: '💼', title: 'All specialties', desc: 'Business, legal, finance, marketing, tech, HR, operations — every type of consultant in one place.' },
  { icon: '⭐', title: 'Rated & reviewed', desc: 'Real reviews from real clients. See track record before you commit.' },
  { icon: '🤝', title: 'Fractional execs', desc: 'Hire a fractional CFO, CMO, or CTO. Enterprise talent at startup-friendly rates.' },
]

const pricing = [
  { name: 'Free', price: '$0', desc: 'Basic profile, no leads', features: ['Public profile listing', 'Specialty + location tags', 'Contact button (email only)', 'Community access'], cta: 'Get Listed Free' },
  { name: 'Pro', price: '$49', period: '/mo', highlight: true, badge: 'Most Popular', desc: 'For active consultants', features: ['Everything in Free', 'Receive inbound lead emails', 'Full profile with photo & bio', '1 featured placement/month', 'Analytics dashboard', '7-day free trial'], cta: 'Start Free Trial' },
  { name: 'Premium', price: '$149', period: '/mo', desc: 'For top consultants', features: ['Everything in Pro', 'Priority placement in search', 'Verified Consultant badge', 'Booking calendar integration', 'Unlimited leads', 'Consulting firm/team accounts'], cta: 'Get Premium' },
]

export default function Home() {
  const router = useRouter()
  const [tab, setTab] = useState<'business'|'consultant'>('business')
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'business', specialty: '' })
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
        body: JSON.stringify({ ...form, type: tab }),
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
    <main style={{ background: '#09090b', color: '#fafafa', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #27272a', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
          Consultant<span style={{ color: '#6366f1' }}>.so</span>
        </span>
        <a href="#waitlist" style={{ background: '#6366f1', color: '#fff', padding: '0.5rem 1.1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Join Waitlist</a>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1c1c1e', border: '1px solid #3f3f46', borderRadius: '999px', padding: '6px 14px', fontSize: '12px', color: '#a1a1aa', marginBottom: '2rem', letterSpacing: '0.5px' }}>
          <span style={{ width: '7px', height: '7px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
          NOW ACCEPTING WAITLIST
        </div>
        <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '1.5rem' }}>
          Find a great consultant<br />
          <span style={{ color: '#6366f1' }}>in minutes, not weeks</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          The marketplace where businesses find vetted consultants — and consultants get steady clients. Every specialty, every industry.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {[['500+', 'Consultants joining'], ['50+', 'Specialties covered'], ['$49/mo', 'Pro listing price'], ['Free', 'For businesses']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#6366f1' }}>{v}</div>
              <div style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '2px' }}>{l}</div>
            </div>
          ))}
        </div>

        <a href="#waitlist" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#6366f1', color: '#fff', padding: '1rem 2rem', borderRadius: '12px', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 0 40px rgba(99,102,241,0.3)' }}>
          Get Early Access →
        </a>
        <p style={{ fontSize: '0.75rem', color: '#52525b', marginTop: '0.75rem' }}>Free for businesses · Consultants get 30 days free</p>
      </section>

      {/* Specialty pills */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {specialties.map(s => (
            <span key={s} style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '999px', padding: '6px 16px', fontSize: '0.8rem', color: '#a1a1aa' }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#0f0f10', borderTop: '1px solid #18181b', borderBottom: '1px solid #18181b', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#6366f1', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Why Consultant.so</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-1px' }}>Everything you need to hire or get hired</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px', background: '#27272a' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: '#09090b', padding: '2rem', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#111113')}
                onMouseLeave={e => (e.currentTarget.style.background = '#09090b')}>
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>{f.title}</h3>
                <p style={{ color: '#71717a', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#6366f1', textTransform: 'uppercase', marginBottom: '0.75rem' }}>For Consultants</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-1px' }}>Simple pricing, serious results</h2>
            <p style={{ color: '#71717a', marginTop: '0.75rem' }}>Waitlist members lock in 20% off forever.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2px', background: '#27272a' }}>
            {pricing.map(p => (
              <div key={p.name} style={{ position: 'relative', background: p.highlight ? '#6366f1' : '#09090b', padding: '2rem', color: p.highlight ? '#fff' : '#fafafa' }}>
                {p.badge && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#000', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '999px', whiteSpace: 'nowrap' }}>{p.badge}</div>}
                <p style={{ fontSize: '0.8rem', color: p.highlight ? 'rgba(255,255,255,0.7)' : '#71717a', marginBottom: '0.5rem' }}>{p.name}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900 }}>{p.price}</span>
                  {p.period && <span style={{ fontSize: '0.85rem', color: p.highlight ? 'rgba(255,255,255,0.6)' : '#71717a' }}>{p.period}</span>}
                </div>
                <p style={{ fontSize: '0.8rem', color: p.highlight ? 'rgba(255,255,255,0.6)' : '#71717a', marginBottom: '1.5rem' }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: p.highlight ? 'rgba(255,255,255,0.85)' : '#a1a1aa' }}>
                      <span style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : '#6366f1' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', background: p.highlight ? '#fff' : '#18181b', color: p.highlight ? '#6366f1' : '#fafafa', border: p.highlight ? 'none' : '1px solid #27272a' }}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section id="waitlist" style={{ background: '#0f0f10', borderTop: '1px solid #18181b', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#6366f1', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Early Access</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '0.75rem' }}>Secure your spot</h2>
            <p style={{ color: '#71717a' }}>Be first in. Lock in 20% off for life.</p>
          </div>

          {/* Tab */}
          <div style={{ display: 'flex', background: '#18181b', borderRadius: '10px', padding: '4px', marginBottom: '1.5rem' }}>
            {(['business', 'consultant'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', background: tab === t ? '#6366f1' : 'transparent', color: tab === t ? '#fff' : '#71717a', transition: 'all 0.15s' }}>
                {t === 'business' ? '🏢 I need a consultant' : '💼 I am a consultant'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[{ label: 'Full name', key: 'name', type: 'text', placeholder: 'Your name' }, { label: 'Email', key: 'email', type: 'email', placeholder: 'you@company.com' }, { label: 'Phone', key: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' }].map(f => (
              <div key={f.key}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#a1a1aa', marginBottom: '6px' }}>{f.label} <span style={{ color: '#ef4444' }}>*</span></label>
                <input type={f.type} required placeholder={f.placeholder} value={(form as Record<string, string>)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{ width: '100%', background: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '0.75rem 1rem', color: '#fafafa', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            ))}

            {tab === 'consultant' && (
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: '#a1a1aa', marginBottom: '6px' }}>Primary specialty</label>
                <select value={form.specialty} onChange={e => setForm({ ...form, specialty: e.target.value })}
                  style={{ width: '100%', background: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '0.75rem 1rem', color: form.specialty ? '#fafafa' : '#52525b', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}>
                  <option value="">Select your specialty</option>
                  {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}

            {error && <div style={{ background: '#1c0a0a', border: '1px solid #7f1d1d', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#fca5a5' }}>{error}</div>}

            <button type="submit" disabled={loading} style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: '10px', padding: '1rem', fontWeight: 700, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, marginTop: '0.25rem', boxShadow: '0 0 30px rgba(99,102,241,0.25)' }}>
              {loading ? 'Joining...' : tab === 'business' ? 'Get Early Access — Free →' : 'Join as a Consultant →'}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#52525b' }}>No credit card · No spam · Unsubscribe anytime</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #18181b', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem' }}>Consultant<span style={{ color: '#6366f1' }}>.so</span></p>
        <p style={{ fontSize: '0.72rem', color: '#3f3f46' }}>© 2026 Consultant.so · The Consulting Marketplace</p>
      </footer>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </main>
  )
}
