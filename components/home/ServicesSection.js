"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Branding",
    subtitle: "Identity & Strategy",
    description:
      "Mood boards, menu typography, apparel tag systems, and complete brand worlds that command attention at every touchpoint.",
    tags: ["Naming", "Visual Identity", "Brand Guidelines", "Packaging"],
    details: {
      outcome:
        "Position your brand to look premium, feel consistent, and convert high-intent buyers faster.",
      idealFor:
        "Luxury apparel labels, premium gifting founders, and hospitality brands entering a competitive market.",
      deliverables: [
        "Brand strategy and positioning map",
        "Logo system, typography, and color architecture",
        "Packaging language and print-ready guidelines",
        "Brand voice framework for ads, captions, and campaigns",
      ],
    },
  },
  {
    number: "02",
    title: "Designing",
    subtitle: "Visual Storytelling",
    description:
      "Transformative before/after brand experiences. Interactive visual narratives that reveal your brand's evolution.",
    tags: ["Art Direction", "Campaign Design", "Brand Films", "Print"],
    details: {
      outcome:
        "Turn your brand from 'visible' to unforgettable with narratives that move both aesthetics and sales.",
      idealFor:
        "Brands relaunching collections, venues upgrading positioning, and founders preparing investor-facing decks.",
      deliverables: [
        "Campaign concepts with visual mood directions",
        "Social + website visual storytelling systems",
        "Print/editorial layout language for brochures and menus",
        "Creative direction for launch and seasonal campaigns",
      ],
    },
  },
  {
    number: "03",
    title: "Photoshoot",
    subtitle: "Gallery & Direction",
    description:
      "Mouth-watering food photography and editorial fashion imagery so compelling your audience can taste and feel it.",
    tags: ["Food Photography", "Fashion Editorial", "Product Shoots", "Lookbooks"],
    details: {
      outcome:
        "Premium imagery that increases desirability, improves engagement quality, and elevates perceived value instantly.",
      idealFor:
        "Fine dining launches, wedding dress rentals, couture catalogs, and product-first hospitality menus.",
      deliverables: [
        "Shot list + styling board + art direction",
        "On-location and studio production workflow",
        "Editorial retouching and platform-specific exports",
        "Asset kits for ads, social, website, and PR",
      ],
    },
  },
  {
    number: "04",
    title: "Website",
    subtitle: "UI/UX & Development",
    description:
      "Bespoke digital experiences - from Michelin-worthy restaurant reservations to curated dress rental e-commerce.",
    tags: ["Next.js", "E-Commerce", "Booking Systems", "Motion Design"],
    details: {
      outcome:
        "A conversion-first digital flagship that reflects premium positioning while keeping performance high.",
      idealFor:
        "Fashion commerce, high-ticket service businesses, premium gifting stores, and reservation-led hospitality.",
      deliverables: [
        "UX architecture, wireframes, and visual system",
        "Conversion-first landing pages and product experiences",
        "Booking, inquiry, and lead-capture flows",
        "Motion interactions and post-launch optimization",
      ],
    },
  },
  {
    number: "05",
    title: "Social Media",
    subtitle: "Engagement & Growth",
    description:
      "Data-driven content strategies paired with visuals so aesthetic they belong in galleries, not feeds.",
    tags: ["Instagram", "TikTok", "Content Strategy", "Analytics"],
    details: {
      outcome:
        "Grow audience quality, not just vanity metrics, and drive measurable business outcomes from content.",
      idealFor:
        "Founders seeking consistent inbound leads, stronger brand authority, and social channels that feel curated.",
      deliverables: [
        "Monthly content strategy and calendar systems",
        "Creative direction for reels, static, and stories",
        "Performance dashboard with growth and conversion KPIs",
        "Community and engagement optimization loops",
      ],
    },
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (!activeService) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeService]);

  return (
    <section
      className="py-20 md:py-28 border-t"
      id="services"
      style={{ borderColor: "rgba(11,11,11,0.15)" }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-2 flex items-start">
            <div className="flex items-center gap-2 mt-1">
              <span className="w-8 h-px bg-crimson" />
              <span className="font-body text-xs text-crimson tracking-widest uppercase">
                What We Do
              </span>
            </div>
          </div>
          <div className="md:col-span-6">
            <h2
              className="font-heading font-bold text-white leading-tight tracking-editorial"
              style={{ fontSize: "clamp(32px, 4vw, 64px)" }}
            >
              The Five Pillars
            </h2>
          </div>
          <div className="md:col-span-4 flex items-end justify-end">
            <Link
              href="/work"
              className="font-body text-xs text-silver hover:text-white tracking-widest uppercase transition-colors line-accent"
            >
              See Case Studies &rarr;
            </Link>
          </div>
        </div>

        <div
          className="divide-y"
          style={{ borderColor: "rgba(11,11,11,0.15)" }}
        >
          {services.map((service, i) => (
            <motion.button
              key={service.number}
              type="button"
              onClick={() => setActiveService(service)}
              className="group w-full text-left py-10 grid md:grid-cols-12 gap-6 items-start cursor-pointer transition-colors duration-300 px-0 hover:px-4 -mx-4"
              style={{ background: "transparent" }}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.995 }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="md:col-span-1">
                <span className="font-heading text-xs text-silver-dim group-hover:text-crimson transition-colors duration-300 tracking-widest">
                  {service.number}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-crimson transition-colors duration-300 tracking-tight">
                  {service.title}
                </h3>
                <p className="font-body text-silver text-xs tracking-widest uppercase mt-1">
                  {service.subtitle}
                </p>
              </div>

              <div className="md:col-span-5">
                <p className="font-body text-silver text-sm leading-relaxed">
                  {service.description}
                </p>
                <span
                  className="inline-block mt-4 font-body text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "#A02B20" }}
                >
                  Click for full breakdown
                </span>
              </div>

              <div className="md:col-span-3 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs text-silver-dim border group-hover:border-crimson/40 group-hover:text-silver transition-colors duration-300 px-3 py-1"
                    style={{ borderColor: "rgba(11,11,11,0.18)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="absolute inset-0"
              style={{ background: "rgba(11,11,11,0.55)", backdropFilter: "blur(4px)" }}
              onClick={() => setActiveService(null)}
              aria-label="Close service details"
            />

            <motion.div
              className="relative w-full max-w-3xl border p-6 md:p-10"
              style={{
                background: "#FDFBF7",
                borderColor: "#0B0B0B",
                boxShadow: "12px 12px 0 #0B0B0B",
              }}
              initial={{ opacity: 0, y: 50, scale: 0.96, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 40, scale: 0.96, rotateX: 8 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 font-body text-xs tracking-widest uppercase px-3 py-1 border"
                style={{ borderColor: "#0B0B0B", color: "#0B0B0B" }}
              >
                Close
              </button>

              <div className="mb-8">
                <p
                  className="font-body text-xs tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#A02B20" }}
                >
                  Service {activeService.number}
                </p>
                <h3
                  className="font-heading font-bold tracking-editorial"
                  style={{ color: "#0B0B0B", fontSize: "clamp(30px, 4vw, 52px)" }}
                >
                  {activeService.title}
                </h3>
                <p className="font-body text-sm tracking-widest uppercase mt-2 text-silver">
                  {activeService.subtitle}
                </p>
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="space-y-7"
              >
                {[
                  { label: "Outcome", value: activeService.details.outcome },
                  { label: "Ideal For", value: activeService.details.idealFor },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <p
                      className="font-body text-[11px] tracking-[0.18em] uppercase mb-2"
                      style={{ color: "#A02B20" }}
                    >
                      {item.label}
                    </p>
                    <p className="font-body text-sm leading-relaxed text-white">{item.value}</p>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p
                    className="font-body text-[11px] tracking-[0.18em] uppercase mb-3"
                    style={{ color: "#A02B20" }}
                  >
                    Deliverables
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeService.details.deliverables.map((item) => (
                      <div
                        key={item}
                        className="px-3 py-3 border font-body text-sm"
                        style={{ borderColor: "rgba(11,11,11,0.2)", color: "#0B0B0B" }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
