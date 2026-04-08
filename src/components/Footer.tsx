import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const navLinks = ["About", "Menu", "Our craft", "Experience", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-section-x-mobile md:px-section-x pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo + tagline — full width top */}
        <div className="mb-12">
          <img
            src="MakiIcon.svg"
            alt="Naruto Ramen"
            className="h-10 w-auto mb-3"
          />
          <p className="text-sm text-black font-thin tracking-wide">
            まきなると — Crafted fresh. Made for you.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-10" />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 mb-12">
          {/* Info — left */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 opacity-40" size={14} />
                <span className="text-sm text-white/60 leading-relaxed">
                  142 Rue Wellington Nord
                  <br />
                  Sherbrooke, QC J1H 5C6
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 opacity-40" size={14} />
                <span className="text-sm text-white/60">+1 (819) 555-0193</span>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="mt-0.5 shrink-0 opacity-40" size={14} />
                <span className="text-sm text-white/60 leading-relaxed">
                  Mon – Thu · 11:00am – 09:00pm
                  <br />
                  Fri – Sun · 12:00pm – 11:00pm
                </span>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
              Menu
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
              Follow
            </p>
            <ul className="space-y-3">
              {[
                { label: "Instagram", href: "#" },
                { label: "TikTok", href: "#" },
                { label: "Facebook", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25 tracking-wide">
            © 2025 Naruto Ramen · まきなると · All rights reserved.
          </p>
          <div className="flex gap-2">
            {[FiInstagram, FiMail].map((Icon, i) => (
              <button
                key={i}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <Icon size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
