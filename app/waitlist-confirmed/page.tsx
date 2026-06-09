import Link from 'next/link'
export default function WaitlistConfirmed() {
  return (
    <main style={{ minHeight: '100vh', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '420px', textAlign: 'center', color: '#fafafa' }}>
        <div style={{ width: '56px', height: '56px', background: '#1c1c1e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>✓</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-1px' }}>You&apos;re on the list!</h1>
        <p style={{ color: '#71717a', marginBottom: '2rem', lineHeight: 1.7 }}>Check your inbox for confirmation. You&apos;ll be first to know when Consultant.so launches — with 20% off locked in.</p>
        <div style={{ background: '#0f0f10', border: '1px solid #27272a', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
          <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#6366f1', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What&apos;s coming</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Vetted consultant profiles across 50+ specialties', 'Instant booking & calendar integration', 'Verified badge system', 'AI-powered matching: describe your problem → get matched'].map(i => (
              <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: '#a1a1aa' }}><span style={{ color: '#6366f1', flexShrink: 0 }}>→</span>{i}</li>
            ))}
          </ul>
        </div>
        <Link href="/" style={{ color: '#6366f1', fontSize: '0.85rem', textDecoration: 'none' }}>← Back to home</Link>
      </div>
    </main>
  )
}
