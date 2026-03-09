export default function PitchSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 max-w-[1600px] mx-auto" id="about">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Label */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-crimson" />
            <span className="font-body text-xs text-crimson tracking-widest uppercase">Our Philosophy</span>
          </div>
        </div>

        {/* Main pitch */}
        <div className="md:col-span-7">
          <p className="font-heading font-bold text-white leading-tight tracking-editorial"
            style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}>
            Most agencies build brands that look good.
            <br /><br />
            <span className="text-crimson">We build brands that feel inevitable.</span>
          </p>
        </div>

        {/* Supporting text */}
        <div className="md:col-span-3 pt-2">
          <p className="font-body text-silver text-sm leading-relaxed mb-6">
            Every outfit has a story. Every dish has a memory. We translate those stories into brand languages that stop your ideal customer mid-scroll — and compel them to act.
          </p>
          <p className="font-body text-silver text-sm leading-relaxed">
            From the architecture of your logo to the lighting of your campaign shoot to the micro-animation on your website — we obsess over every signal your brand emits.
          </p>
        </div>
      </div>

      {/* Divider with accent */}
      <div className="mt-20 flex items-center gap-6">
        <div className="flex-1 h-px bg-white/5" />
        <span className="font-body text-silver-dim text-xs tracking-widest uppercase">Est. in Lucknow</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
    </section>
  )
}
