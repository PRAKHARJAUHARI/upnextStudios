import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://x.com/upnextagency", icon: Twitter },
  {
    label: "Instagram",
    href: "https://www.instagram.com/upnextstudios.in?igsh=MXNpanllaHd4d2s2Zg%3D%3D",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/upnextagency",
    icon: Linkedin,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-20 px-6 md:px-12 border-t"
      style={{
        backgroundColor: "var(--color-charcoal)",
        borderColor: "rgba(11, 11, 11, 0.15)",
        color: "var(--color-white)",
      }}
    >
      <div className="max-w-[1600px] mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Branding */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center hover-trigger"
            aria-label="Upnext home"
          >
            <Image
              src="/logo.png"
              alt="Upnext"
              width={148}
              height={44}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-6 text-sm leading-relaxed max-w-xs opacity-80 font-body">
            Elevating brands through strategy, storytelling, and digital
            experiences designed for measurable growth.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-body font-bold tracking-[0.2em] uppercase mb-6 opacity-90">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm font-body">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover-trigger transition-colors hover:text-crimson"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h4 className="text-xs font-body font-bold tracking-[0.2em] uppercase mb-6 opacity-90">
            Contact Information
          </h4>
          <ul className="space-y-3 text-sm font-body">
            <li>
              <a
                href="mailto:Upnext.sociomedia@gmail.com"
                className="hover-trigger transition-colors hover:text-crimson"
              >
                Upnext.sociomedia@gmail.com
              </a>
            </li>
            <li className="opacity-80">Lucknow, Uttar Pradesh, India</li>
            <li>
              <a
                href="https://wa.me/919935931155"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-trigger inline-flex items-center gap-2 opacity-80 transition-colors hover:text-crimson"
              >
                <FaWhatsapp size={15} />
                <span>+91 99359 31155</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="text-xs font-body font-bold tracking-[0.2em] uppercase mb-6 opacity-90">
            Social Media
          </h4>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-trigger w-10 h-10 border border-black/20 flex items-center justify-center transition-colors hover:text-crimson hover:border-crimson"
                >
                  <Icon size={16} strokeWidth={1.9} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="max-w-[1600px] mx-auto mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        style={{ borderColor: "rgba(11, 11, 11, 0.15)" }}
      >
        <p className="text-xs font-body opacity-80">
          © {year} Upnext Agency. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-xs font-body opacity-70">
          <Link
            href="/"
            className="hover-trigger transition-colors hover:text-crimson"
          >
            Privacy Policy
          </Link>
          <span className="opacity-40">|</span>
          <Link
            href="/"
            className="hover-trigger transition-colors hover:text-crimson"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
