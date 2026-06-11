import { motion } from "framer-motion";
import { Play, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-rwanda-yellow/20 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand - Rwandan Cultural */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                className="drop-shadow-lg"
              >
                <circle cx="20" cy="20" r="18" fill="#00A1DE" />
                <circle cx="20" cy="20" r="14" fill="#FEDD00" />
                <circle cx="20" cy="20" r="10" fill="#00A651" />
                <path
                  d="M20 8 L22 12 L26 12 L23 15 L24 19 L20 17 L16 19 L17 15 L14 12 L18 12 Z"
                  fill="#ffffff"
                  opacity="0.9"
                />
              </svg>
              <span
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#FEDD00",
                  WebkitTextFillColor: "#FEDD00",
                  display: "block",
                }}
              >
                RWANDA
              </span>
              <span
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#ffffff",
                  WebkitTextFillColor: "white",
                  display: "block",
                }}
              >
                STREAM
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Celebrating Rwandan culture through cinema. Your premium destination for African movies, series, and cultural content.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-rwanda-yellow/20 flex items-center justify-center text-text-secondary hover:text-rwanda-yellow hover:bg-rwanda-yellow/10 hover:border-rwanda-yellow/40 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Download", "Updates"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Press"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Privacy", "Terms"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-rwanda-yellow transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-rwanda-yellow/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © 2026 RWANDA STREAM. Celebrating African Cinema.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-text-muted hover:text-rwanda-yellow transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
