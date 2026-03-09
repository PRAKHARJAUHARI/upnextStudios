'use client'

import Link from 'next/link'

export default function SharedCtaSection() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-brand-dark z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-light/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1800px] mx-auto relative z-10 text-center">
        <div className="marquee-container opacity-10 mb-12 absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none">
          <div className="marquee-content text-[15vw] font-serif text-brand-light font-bold">
            FASHION • FOOD • FILM • DESIGN • BRANDING • STRATEGY • PHOTOGRAPHY • WEB • SOCIAL •
          </div>
        </div>

        <span className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase block mb-6 reveal-text">
          Ready to Elevate?
        </span>
        <h2 className="text-5xl md:text-8xl font-serif text-brand-light mb-12 reveal-text">
          Let&apos;s build <br /> <span className="italic">something extraordinary.</span>
        </h2>

        <Link
          href="/contact"
          className="inline-block px-10 py-5 bg-brand-accent text-brand-light font-bold tracking-widest hover:bg-brand-light hover:text-brand-dark transition-all duration-300 hover-trigger reveal-text"
        >
          START YOUR PROJECT
        </Link>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
