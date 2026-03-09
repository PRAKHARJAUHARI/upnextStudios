import FormbricksEmbed from "@/components/FormbricksEmbed";

export const metadata = {
  title: "Contact — Upnext Agency | Start Your Brand Project",
  description:
    "Ready to elevate your fashion or food brand? Get in touch with Upnext, Lucknow's premier creative marketing agency, for branding, photography, and digital strategy.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-8 h-px bg-crimson" />
          <span className="font-body text-xs text-crimson tracking-widest uppercase">
            Get in Touch
          </span>
        </div>
        <div className="grid md:grid-cols-12 gap-12">
          {/* Heading */}
          <div className="md:col-span-6">
            <h1
              className="font-heading font-bold text-white tracking-editorial leading-tight"
              style={{ fontSize: "clamp(42px, 6vw, 96px)" }}
            >
              Start your
              <br />
              <span className="text-crimson">project.</span>
            </h1>
            <p className="font-body text-silver text-base leading-relaxed mt-8 max-w-md">
              Tell us about your brand, your vision, and what's holding you
              back. We'll respond within 24 hours with a clear path forward.
            </p>

            {/* Contact info */}
            <div className="mt-12 space-y-6">
              <div>
                <p className="font-body text-silver-dim text-xs tracking-widest uppercase mb-1">
                  Email
                </p>
                <a
                  href="mailto:Upnext.sociomedia@gmail.com"
                  className="font-body text-white text-sm hover:text-crimson transition-colors line-accent"
                >
                  Upnext.sociomedia@gmail.com
                </a>
              </div>
              <div>
                <p className="font-body text-silver-dim text-xs tracking-widest uppercase mb-1">
                  Based In
                </p>
                <p className="font-body text-white text-sm">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>
              <div>
                <p className="font-body text-silver-dim text-xs tracking-widest uppercase mb-1">
                  Works With
                </p>
                <p className="font-body text-white text-sm">
                  Fashion Brands · Fine Dining · Lifestyle
                </p>
              </div>
              <div>
                <p className="font-body text-silver-dim text-xs tracking-widest uppercase mb-1">
                  Response Time
                </p>
                <p className="font-body text-white text-sm">Within 24 hours</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-12 flex items-center gap-6">
              <a
                href="https://instagram.com/upnextagency"
                className="font-body text-xs text-silver hover:text-white tracking-widest uppercase transition-colors line-accent"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/upnextagency"
                className="font-body text-xs text-silver hover:text-white tracking-widest uppercase transition-colors line-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Formbricks Embed */}
          <div className="md:col-span-6">
            <FormbricksEmbed />
          </div>
        </div>
      </section>

      {/* Decorative bottom strip */}
      <div className="border-t border-white/5 py-6 px-6 md:px-12">
        <p className="text-silver-dim/30 text-xs font-body text-center">
          Upnext — Premium Marketing Agency in Lucknow · Serving fashion, food,
          and lifestyle brands across India
        </p>
      </div>
    </div>
  );
}
