import Link from 'next/link'
import SharedCtaSection from '@/components/SharedCtaSection'

// 5 Pillars with detailed case study content
const pillars = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding',
    subtitle: 'Identity & Strategy',
    description: 'We craft brand worlds — not just logos. From the typeface on a Michelin-hopeful menu to the embossed label on a luxury garment, every touchpoint is intentional.',
    projects: [
      {
        title: 'Velvet & Vine Restaurant',
        desc: 'Complete visual identity for an upscale Lucknow restaurant: logo, menu typography, tableware, and staff uniform branding.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85',
      },
      {
        title: 'Thread & Thread Apparel',
        desc: 'Apparel tag design system, packaging, and lookbook direction for a contemporary Indian fashion house.',
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=700&q=85',
      },
    ],
  },
  {
    id: 'designing',
    number: '02',
    title: 'Designing',
    subtitle: 'Visual Storytelling',
    description: 'Before and after brand transformations. Interactive visual narratives that make the invisible — your brand\'s evolution — visceral.',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&q=80',
      label: 'Saffron Story: Before → After',
    },
    projects: [
      {
        title: 'Saffron Story Café',
        desc: 'Full brand transformation — identity, colour system, and digital touchpoints.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=85',
      },
    ],
  },
  {
    id: 'photoshoot',
    number: '03',
    title: 'Photoshoot Gallery',
    subtitle: 'Editorial Direction',
    description: 'Imagery so considered, it belongs in print. Our food and fashion work consistently earns editorial and press coverage.',
    gallery: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=85',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=85',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=85',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&q=85',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&q=85',
    ],
  },
  {
    id: 'website',
    number: '04',
    title: 'Website',
    subtitle: 'UI/UX & Development',
    description: 'Bespoke digital experiences engineered for conversion. Restaurant reservation systems that feel five-star. E-commerce flows that sell clothes like a flagship store.',
    mockups: [
      { label: 'Restaurant Reservation System', note: 'Next.js + real-time availability', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85' },
      { label: 'Dress Rental E-Commerce', note: 'Shopify + custom booking flow', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=700&q=85' },
    ],
  },
  {
    id: 'social',
    number: '05',
    title: 'Social Media',
    subtitle: 'Engagement & Growth',
    description: 'Aesthetic-first content strategy backed by rigorous analytics. We grow accounts that look too good to unfollow and convert at rates that justify every rupee.',
    stats: [
      { label: 'Avg. Follower Growth', value: '+340%', period: '6 months' },
      { label: 'Engagement Rate', value: '8.4%', period: 'vs 1.2% industry avg' },
      { label: 'Story Reach Increase', value: '5.8×', period: 'post-strategy' },
    ],
    creatives: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=85',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=85',
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=85',
    ],
  },
]

export const metadata = {
  title: 'Our Work — Upnext Agency | Fashion & Food Brand Portfolios',
  description: 'Explore Upnext\'s portfolio of brand identities, editorial photography, websites, and social media campaigns for premium fashion and food clients across India.',
}

export default function WorkPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-8 h-px bg-crimson" />
          <span className="font-body text-xs text-crimson tracking-widest uppercase">Portfolio</span>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h1 className="font-heading font-bold text-white tracking-editorial leading-tight"
              style={{ fontSize: 'clamp(48px, 7vw, 112px)' }}>
              The Work
            </h1>
          </div>
          <div className="md:col-span-4 flex items-end">
            <p className="font-body text-silver text-sm leading-relaxed">
              Five disciplines. One obsession: crafting unforgettable brand experiences for fashion labels and food establishments.
            </p>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      {pillars.map((pillar, pi) => (
        <section key={pillar.id} id={pillar.id} className={`py-20 md:py-28 border-t border-white/5 ${pi % 2 === 1 ? 'bg-charcoal' : 'bg-black'}`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            {/* Section header */}
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-1">
                <span className="font-heading text-xs text-silver-dim tracking-widest">{pillar.number}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-heading font-bold text-white tracking-editorial" style={{ fontSize: 'clamp(36px, 4.5vw, 72px)' }}>
                  {pillar.title}
                </h2>
                <p className="font-body text-xs text-crimson tracking-widest uppercase mt-2">{pillar.subtitle}</p>
              </div>
              <div className="md:col-span-5 md:col-start-8 flex items-end">
                <p className="font-body text-silver text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>

            {/* Projects grid */}
            {pillar.projects && (
              <div className="grid md:grid-cols-2 gap-6">
                {pillar.projects.map((project, i) => (
                  <div key={i} className="group relative overflow-hidden img-hover-zoom">
                    <div className="aspect-[4/3]">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
                      <p className="font-body text-silver text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Before/After */}
            {pillar.beforeAfter && (
              <div className="mt-12">
                <p className="font-body text-xs text-silver-dim tracking-widest uppercase mb-6">
                  {pillar.beforeAfter.label}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute top-4 left-4 z-10 bg-black/70 text-silver font-body text-xs tracking-widest uppercase px-3 py-1">Before</span>
                    <img src={pillar.beforeAfter.before} alt="Before" className="w-full aspect-[4/3] object-cover filter grayscale" />
                  </div>
                  <div className="relative">
                    <span className="absolute top-4 left-4 z-10 bg-crimson text-white font-body text-xs tracking-widest uppercase px-3 py-1">After</span>
                    <img src={pillar.beforeAfter.after} alt="After" className="w-full aspect-[4/3] object-cover" />
                  </div>
                </div>
                {pillar.projects && (
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {pillar.projects.map((project, i) => (
                      <div key={i} className="group relative overflow-hidden img-hover-zoom">
                        <div className="aspect-[4/3]">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-heading text-lg font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Masonry Gallery */}
            {pillar.gallery && (
              <div className="columns-2 md:columns-3 gap-3 space-y-3">
                {pillar.gallery.map((src, i) => (
                  <div key={i} className="break-inside-avoid group relative overflow-hidden img-hover-zoom">
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full block"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                      <span className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Device mockups for Website */}
            {pillar.mockups && (
              <div className="grid md:grid-cols-2 gap-8">
                {pillar.mockups.map((m, i) => (
                  <div key={i} className="group">
                    <div className="relative">
                      {/* Isometric-style device frame */}
                      <div className="relative border border-white/10 rounded-lg overflow-hidden hover:border-crimson/30 transition-colors duration-500">
                        <div className="h-6 bg-charcoal-mid border-b border-white/5 flex items-center gap-2 px-4">
                          <span className="w-2 h-2 rounded-full bg-crimson/60" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="flex-1 mx-4 h-2 bg-white/5 rounded-full" />
                        </div>
                        <div className="aspect-[16/9] overflow-hidden">
                          <img src={m.image} alt={m.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-heading text-lg font-bold text-white">{m.label}</h3>
                      <p className="font-body text-silver-dim text-xs tracking-widest mt-1">{m.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Social stats + creatives */}
            {pillar.stats && (
              <div className="grid md:grid-cols-12 gap-8">
                {/* Stats dashboard */}
                <div className="md:col-span-5">
                  <div className="border border-white/5 rounded-lg p-8 bg-charcoal-mid">
                    <p className="font-body text-xs text-silver-dim tracking-widest uppercase mb-8">Performance Dashboard</p>
                    <div className="space-y-8">
                      {pillar.stats.map((stat, i) => (
                        <div key={i} className="flex items-center justify-between border-b border-white/5 pb-6 last:border-0">
                          <div>
                            <p className="font-body text-silver text-xs tracking-widest uppercase">{stat.label}</p>
                            <p className="font-body text-silver-dim text-xs mt-1">{stat.period}</p>
                          </div>
                          <span className="font-heading text-3xl font-bold text-crimson">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Instagram creatives */}
                <div className="md:col-span-7">
                  <div className="grid grid-cols-3 gap-3">
                    {pillar.creatives.map((src, i) => (
                      <div key={i} className="aspect-square overflow-hidden img-hover-zoom">
                        <img src={src} alt={`Creative ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-silver-dim text-xs tracking-widest uppercase mt-4 text-center">
                    Sample Content Grid · Instagram
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <SharedCtaSection />
    </div>
  )
}
