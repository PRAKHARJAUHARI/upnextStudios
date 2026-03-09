'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <img src="/logo.png" alt="Upnext" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-silver hover:text-white transition-colors duration-300 tracking-widest uppercase line-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 bg-crimson text-white font-body text-xs font-600 tracking-widest uppercase px-6 py-3 overflow-hidden transition-all duration-300 hover:bg-crimson-light"
            >
              <span className="relative z-10">Start a Project</span>
              <svg
                className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-4 h-px bg-crimson transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 w-6" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 transition-all duration-700 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-heading text-5xl font-bold text-white hover:text-crimson transition-colors duration-300 tracking-editorial"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-16">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-crimson text-white font-body text-xs tracking-widest uppercase px-8 py-4 hover:bg-crimson-light transition-colors"
          >
            Start a Project →
          </Link>
        </div>
        <p className="absolute bottom-8 left-8 text-silver-dim text-xs tracking-widest uppercase">
          Lucknow, India · Global
        </p>
      </div>
    </>
  );
}
