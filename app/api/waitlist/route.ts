export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const { createClient } = await import('@supabase/supabase-js')

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const body = await request.json()
    const { name, email, phone, website } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email and phone are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const { error: dbError } = await supabaseAdmin
      .from('waitlist')
      .insert([{ name, email, phone, website: website || null }])

    if (dbError) {
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist!' },
          { status: 409 }
        )
      }
      console.error('DB error:', dbError)
      return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Consultant.so <hello@consultant.so>',
        to: email,
        subject: "You're on the Linkbaits waitlist 🔗",
        html: `
          <div style="font-family:-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:40px 20px;color:#111">
            <div style="margin-bottom:32px">
              <span style="font-size:24px;font-weight:800;letter-spacing:-0.5px">Linkbaits<span style="color:#6366f1">.com</span></span>
            </div>
            <h1 style="font-size:28px;font-weight:700;margin:0 0 16px">You're in, ${name}! 🎉</h1>
            <p style="font-size:16px;line-height:1.7;color:#444;margin:0 0 24px">
              You've secured your spot on the Linkbaits.com waitlist. When we launch, you'll be among the first to get access — plus an exclusive early-bird discount.
            </p>
            <div style="background:#f9f9ff;border:1px solid #e5e5ff;border-radius:12px;padding:24px;margin:0 0 32px">
              <p style="font-size:14px;font-weight:600;color:#6366f1;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px">What's coming</p>
              <ul style="margin:0;padding:0 0 0 20px;color:#444;font-size:15px;line-height:2">
                <li>AI Linkbait Scanner — score any URL 1–10</li>
                <li>Linkbait Idea Generator for your niche</li>
                <li>Competitor Link Spy tool</li>
                <li>FreeLinks automation (30+ directories)</li>
                <li>AEO + GEO tracking dashboard</li>
              </ul>
            </div>
            <p style="font-size:14px;color:#888;margin:0">Questions? Reply to this email anytime.<br>— The Linkbaits team</p>
          </div>
        `,
      })
    } catch (emailErr) {
      console.error('Email send failed (non-fatal):', emailErr)
    }

    return NextResponse.json({ success: true, message: "You're on the list!" })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
