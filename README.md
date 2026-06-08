# Linkbaits.com

> The Linkbait Platform That Gets You Cited

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS**
- **Supabase** (PostgreSQL + Auth)
- **Stripe** (subscriptions)
- **Resend** (transactional email)
- **Vercel** (deployment)

## Quick Start

### 1. Clone & install
```bash
git clone https://github.com/kreimanchess/linkbaits-app
cd linkbaits-app
npm install
```

### 2. Set up environment variables
Copy `.env.example` to `.env.local` and fill in:
```
NEXT_PUBLIC_SUPABASE_URL=        # From Supabase project settings
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # From Supabase project settings
SUPABASE_SERVICE_ROLE_KEY=       # From Supabase project settings
RESEND_API_KEY=                  # From resend.com
NEXT_PUBLIC_SITE_URL=https://linkbaits.com
```

### 3. Set up Supabase
- Create project: `linkbaits-prod` at supabase.com
- Open SQL Editor → paste contents of `supabase-schema.sql` → Run

### 4. Run locally
```bash
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push to GitHub: `kreimanchess/linkbaits-app`
2. Import repo at vercel.com
3. Add all ENV variables in Vercel dashboard
4. Deploy → point linkbaits.com DNS to Vercel

## Pages
| Route | Description |
|-------|-------------|
| `/` | Waitlist landing page |
| `/waitlist-confirmed` | Post-signup thank you |
| `POST /api/waitlist` | Waitlist signup API |

## Next Phases
- Phase 3: Auth + Stripe billing
- Phase 4: Dashboard + AI scanner (Claude API)
- Phase 5: Competitor spy, FreeLinks automation
- Phase 6: ProductHunt launch
