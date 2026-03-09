# Upnext Agency — Next.js Website

Premium marketing agency website for fashion and food brands. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
npm install
cp .env.example .env.local
# Fill in your environment variables
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
upnext/
├── app/
│   ├── layout.js                    # Root layout with SEO metadata
│   ├── page.js                      # Home page
│   ├── globals.css                  # Global styles + Formbricks theme overrides
│   ├── contact/
│   │   └── page.js                  # Contact page with Formbricks embed
│   ├── work/
│   │   └── page.js                  # Portfolio — 5 Pillars
│   └── api/
│       └── formbricks-webhook/
│           └── route.js             # ✅ Webhook receiver with HMAC verification
├── components/
│   ├── Navbar.js                    # Responsive navbar with mobile menu
│   ├── Footer.js                    # Footer with SEO copy
│   ├── CustomCursor.js              # Crimson custom cursor
│   ├── FormbricksEmbed.js           # Formbricks embed + dark theme
│   └── home/
│       ├── HeroSection.js           # Full-height hero
│       ├── MarqueeStrip.js          # Scrolling marquee
│       ├── PitchSection.js          # 5-second philosophy pitch
│       ├── ServicesSection.js       # 5 Pillars list
│       ├── WorkGrid.js              # Bento-box portfolio grid
│       ├── TestimonialsSection.js   # Client testimonials
│       └── AboutSection.js         # About + brand values
├── tailwind.config.js               # Custom palette + typography
├── next.config.js                   # Image domains + webhook headers
├── .env.example                     # Environment variable template
└── README.md
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `black` | `#000000` | Primary background |
| `charcoal` | `#0A0A0A` | Secondary background |
| `crimson` | `#8B0000` | CTA buttons, accents, hovers |
| `white` | `#FFFFFF` | Primary text |
| `silver` | `#A8A8A8` | Secondary text |
| `font-heading` | Space Grotesk | All headings |
| `font-body` | Manrope | Body copy, UI labels |

---

## 🔗 Formbricks Setup

### 1. Create your survey in Formbricks
- Go to [app.formbricks.com](https://app.formbricks.com)
- Create a new survey with fields: Name, Email, Brand Name, Sector, Services (multi-select), Budget, Project Brief

### 2. Get your IDs
```
Dashboard → Your Survey → Share/Embed → Survey ID
Dashboard → Settings → General → Environment ID
```

### 3. Configure the webhook
```
Dashboard → Settings → Webhooks → Add Webhook
URL: https://yourdomain.com/api/formbricks-webhook
Events: responseCreated
Copy the generated secret
```

### 4. Set environment variables
```bash
FORMBRICKS_WEBHOOK_SECRET=<from step 3>
NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID=<from step 2>
NEXT_PUBLIC_FORMBRICKS_SURVEY_ID=<from step 2>
```

### 5. Update question IDs in webhook route
In `app/api/formbricks-webhook/route.js`, update the `extractLeadData()` function with your actual Formbricks question IDs.

---

## 🔒 Webhook Security

The webhook receiver (`app/api/formbricks-webhook/route.js`) implements:

- **HMAC-SHA256 signature verification** — rejects any request not signed by Formbricks
- **Timing-safe comparison** — prevents timing attacks on signature check
- **Replay attack prevention** — rejects payloads with timestamps older than 5 minutes
- **Event filtering** — only processes `responseCreated` events

---

## 🌐 SEO

- Structured data (JSON-LD) for `MarketingAgency` schema
- Localized metadata: "marketing agency Lucknow", "branding agency Lucknow"
- `siteName`, `openGraph`, Twitter card metadata
- Footer hidden copy for long-tail local SEO keywords

---

## 🚀 Hostinger Deployment

1. Build: `npm run build`
2. Set all environment variables in Hostinger panel
3. For Node.js hosting, point entry to `.next/` directory
4. For static export: add `output: 'export'` to `next.config.js` (note: API routes won't work — use Hostinger Node.js hosting)

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | Framework (App Router) |
| `react` 18 | UI runtime |
| `tailwindcss` | Utility CSS |

> Framer Motion can be added: `npm install framer-motion` and import in any `'use client'` component.
