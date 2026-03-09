import TeamShowcase from "@/components/ui/team-showcase";

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-black" id="team">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-crimson" />
              <span className="font-body text-xs text-crimson tracking-widest uppercase">Our Team</span>
            </div>
          </div>

          <div className="md:col-span-6">
            <h2
              className="font-heading font-bold text-white tracking-editorial leading-tight"
              style={{ fontSize: "clamp(30px, 3.6vw, 58px)" }}
            >
              The people shaping
              <br />
              premium brand stories.
            </h2>
          </div>

          <div className="md:col-span-3">
            <p className="font-body text-sm text-silver leading-relaxed">
              Strategy, design, media, and growth experts working as one focused unit for high-intent businesses.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-14 preserve-3d">
          <div className="glass border border-black/15 p-4 md:p-8">
            <TeamShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
