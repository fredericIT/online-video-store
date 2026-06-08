import { motion } from "framer-motion";
import { Play, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                STREAM
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Your premium destination for movies, series, and exclusive content.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
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
                      className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
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
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © 2026 STREAM. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
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
