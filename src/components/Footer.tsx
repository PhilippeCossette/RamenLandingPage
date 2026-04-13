import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiInstagram,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

const navLinks = ["About", "Menu", "Our craft", "Experience", "Contact"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-section-x-mobile md:px-section-x pt-16 pb-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {/* Logo + tagline */}
        <motion.div variants={fadeUp} className="mb-12">
          <img
            src="MakiIcon.svg"
            alt="Naruto Ramen"
            className="h-10 w-auto mb-3"
          />
          <p className="text-sm text-black font-thin tracking-wide">
            まきなると — Crafted fresh. Made for you.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/10 mb-10"
        />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 mb-12">
          {/* Info */}
          <motion.div
            variants={container}
            className="col-span-2 md:col-span-1 flex flex-col gap-4"
          >
            <ul className="space-y-3">
              {[
                {
                  icon: FiMapPin,
                  content: (
                    <>
                      142 Rue Wellington Nord <br />
                      Sherbrooke, QC J1H 5C6
                    </>
                  ),
                },
                {
                  icon: FiPhone,
                  content: "+1 (819) 555-0193",
                },
                {
                  icon: FiClock,
                  content: (
                    <>
                      Mon – Thu · 11:00am – 09:00pm <br />
                      Fri – Sun · 12:00pm – 11:00pm
                    </>
                  ),
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <item.icon className="mt-0.5 shrink-0 opacity-40" size={14} />
                  <span className="text-sm text-white/60 leading-relaxed">
                    {item.content}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Nav */}
          <motion.div variants={container}>
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 mb-5"
            >
              Menu
            </motion.p>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <motion.li key={link} variants={fadeUp}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    whileHover={{ x: 5 }}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={container}>
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 mb-5"
            >
              Follow
            </motion.p>

            <ul className="space-y-3">
              {["Instagram", "TikTok", "Facebook"].map((label) => (
                <motion.li key={label} variants={fadeUp}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <p className="text-xs text-white/25 tracking-wide">
            © 2025 Naruto Ramen · まきなると · All rights reserved.
          </p>

          <div className="flex gap-2">
            {[FiInstagram, FiMail].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <Icon size={13} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
