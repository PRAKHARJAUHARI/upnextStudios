import Link from 'next/link'

// Using curated Unsplash URLs for high-quality food/fashion imagery
const projects = [
  {
    id: 1,
    title: 'Velvet & Vine',
    category: 'Fine Dining · Branding',
    sector: 'Food',
    description: 'Complete rebrand for an upscale Lucknow restaurant',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90',
    size: 'large',
  },
  {
    id: 2,
    title: 'Maison Rêve',
    category: 'Fashion · Editorial',
    sector: 'Fashion',
    description: 'Lookbook direction for a luxury dress rental label',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=90',
    size: 'small',
  },
  {
    id: 3,
    title: 'Saffron Story',
    category: 'Food Photography · Social',
    sector: 'Food',
    description: 'Content strategy & visual identity for a heritage café',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=90',
    size: 'small',
  },
  {
    id: 4,
    title: 'Thread & Thread',
    category: 'Apparel · Brand Identity',
    sector: 'Fashion',
    description: 'Identity system for a contemporary Indian fashion house',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=90',
    size: 'large',
  },
]

export default function WorkGrid() {
  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-charcoal">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-crimson" />
              <span className="font-body text-xs text-crimson tracking-widest uppercase">Selected Work</span>
            </div>
            <h2 className="font-heading font-bold text-white tracking-editorial"
              style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}>
              Our Portfolio
            </h2>
          </div>
          <Link href="/work" className="hidden md:inline-block font-body text-xs text-silver hover:text-white tracking-widest uppercase transition-colors line-accent">
            View All Work →
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Large card */}
          <Link href="/work" className="group lg:col-span-7 relative overflow-hidden aspect-[16/10] img-hover-zoom block">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-body text-xs text-crimson tracking-widest uppercase mb-2">{projects[0].category}</p>
              <h3 className="font-heading text-3xl font-bold text-white tracking-tight">{projects[0].title}</h3>
              <p className="font-body text-silver text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {projects[0].description}
              </p>
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-crimson">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </Link>

          {/* Two small cards stacked */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[projects[1], projects[2]].map((project) => (
              <Link key={project.id} href="/work" className="group relative overflow-hidden aspect-[4/3] img-hover-zoom block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-xs text-crimson tracking-widest uppercase mb-1">{project.category}</p>
                  <h3 className="font-heading text-xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Full-width bottom */}
          <Link href="/work" className="group lg:col-span-12 relative overflow-hidden aspect-[21/6] img-hover-zoom block">
            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center p-10">
              <p className="font-body text-xs text-crimson tracking-widest uppercase mb-3">{projects[3].category}</p>
              <h3 className="font-heading text-4xl font-bold text-white tracking-tight max-w-sm">{projects[3].title}</h3>
            </div>
          </Link>
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link href="/work" className="font-body text-xs text-silver hover:text-white tracking-widest uppercase transition-colors">
            View All Work →
          </Link>
        </div>
      </div>
    </section>
  )
}
