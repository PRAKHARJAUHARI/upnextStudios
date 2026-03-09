const values = [
  { label: 'Obsessive craft', desc: 'Every pixel, every word, every frame.' },
  { label: 'Sector depth', desc: 'Fashion and food only — no compromises.' },
  { label: 'Honest metrics', desc: 'We track bookings, sales, and growth.' },
]

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-charcoal" id="about-story">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-crimson" />
              <span className="font-body text-xs text-crimson tracking-widest uppercase">About Upnext</span>
            </div>
            <h2 className="font-heading font-bold text-white tracking-editorial mb-8"
              style={{ fontSize: 'clamp(32px, 3.5vw, 56px)' }}>
              Born in Lucknow.<br />Built for the world.
            </h2>
            <p className="font-body text-silver text-sm leading-loose mb-6">
              We are a boutique creative agency with a singular focus: making fashion and food brands impossible to ignore. Founded by creatives who bleed both aesthetics and performance, Upnext was built for founders and operators who believe that beauty and business are not opposites — they are multipliers.
            </p>
            <p className="font-body text-silver text-sm leading-loose">
              Based in Lucknow with clients across India and internationally, we bring a global editorial lens to brands that deserve to be seen.
            </p>
          </div>

          {/* Right — values */}
          <div className="md:col-span-7 md:pl-12">
            <div className="grid grid-cols-1 gap-0 divide-y divide-white/5">
              {values.map((v, i) => (
                <div key={i} className="py-8 flex items-start gap-6 group">
                  <span className="font-heading text-5xl font-bold text-white/5 group-hover:text-crimson/20 transition-colors duration-500 leading-none mt-1 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{v.label}</h3>
                    <p className="font-body text-silver text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second marquee strip */}
            <div className="mt-10 overflow-hidden border-t border-white/5 pt-8">
              <div className="marquee-track-reverse opacity-30">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="inline-block px-6 font-heading text-xs tracking-widest text-white uppercase whitespace-nowrap">
                    Fashion · Food · Film · Design · Branding · Strategy · Photography · Web · Social ·&nbsp;
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
