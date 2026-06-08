import Link from 'next/link'

export default function WaitlistConfirmed() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">You&apos;re on the list!</h1>
        <p className="text-gray-500 text-lg mb-8">
          Check your inbox — we sent a confirmation. You&apos;ll be first to know when Linkbaits.com launches.
        </p>
        <div className="bg-indigo-50 rounded-xl p-6 mb-8 text-left">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3">While you wait</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-indigo-500">→</span> Share with an SEO friend and move up the list
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-500">→</span> Early members get 20% off at launch
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-500">→</span> Beta testers get free Agency access for 30 days
            </li>
          </ul>
        </div>
        <Link href="/" className="text-indigo-600 text-sm hover:underline">
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
