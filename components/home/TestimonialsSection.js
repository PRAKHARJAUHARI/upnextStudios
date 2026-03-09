import CircularTestimonials from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "Upnext transformed how Lucknow perceives our brand. We now run at full reservation capacity on weekends and have waiting lists for private dining.",
    name: "Ananya Kapoor",
    designation: "Founder, Velvet & Vine",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "The visual campaign felt like international editorial quality. We launched with confidence, attracted premium clientele, and tripled high-ticket inquiries.",
    name: "Radhika Singh",
    designation: "Creative Director, Maison Reve",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Their strategy gave us both aesthetics and numbers. Engagement quality improved, average order value increased, and the brand finally feels unmistakable.",
    name: "Sahil Mehta",
    designation: "CEO, Saffron Story",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 md:py-28 border-t"
      style={{ borderColor: "rgba(11, 11, 11, 0.15)", background: "#FDF5F5" }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 mb-10">
          <span className="w-8 h-px bg-crimson" />
          <span
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: "#A02B20" }}
          >
            Client Voices
          </span>
        </div>

        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay
            colors={{
              name: "#0B0B0B",
              designation: "rgba(11,11,11,0.72)",
              testimony: "#0B0B0B",
              arrowBackground: "#0B0B0B",
              arrowForeground: "#FDFBF7",
              arrowHoverBackground: "#A02B20",
            }}
            fontSizes={{
              name: "clamp(1.7rem, 2.8vw, 2.4rem)",
              designation: "0.82rem",
              quote: "clamp(1rem, 1.4vw, 1.15rem)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

