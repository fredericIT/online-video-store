import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5">
      {/* Left links */}
      <div className="flex items-center gap-8">
        {["Genre", "Featured", "Pricing"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-wide"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Center logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link to="/">
          <span
            className="text-2xl font-black tracking-widest text-white"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "0.2em" }}
          >
            STREAM
          </span>
        </Link>
      </div>

      {/* Right — Sign In */}
      <Link to="/signup">
        <button
          id="sign-in-btn"
          className="px-5 py-2 rounded-full border border-white/30 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm"
        >
          Sign In
        </button>
      </Link>
    </nav>
  );
}

// ─── Platform Logos ─────────────────────────────────────────────────────────────
function PlatformLogos() {
  const platforms = [
    {
      id: "apple-tv",
      label: "Apple TV",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.17 1.33-2.15 3.91.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.67M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
    },
    {
      id: "android",
      label: "Android",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.523 15.344l1.046-1.812a.5.5 0 00-.866-.5l-1.06 1.836A6.973 6.973 0 0112 14c-1.39 0-2.687.406-3.778 1.103L7.297 13.032a.5.5 0 00-.866.5l1.046 1.812A7 7 0 005 21h14a7 7 0 00-1.477-5.656zM10 18H9v-1h1v1zm5 0h-1v-1h1v1zM4.5 12a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zm15 0a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM8.5 2.71l-.94-.94a.5.5 0 00-.7.7l.93.94A5.97 5.97 0 006 7h12a5.97 5.97 0 00-1.79-3.59l.93-.94a.5.5 0 00-.7-.7l-.94.94A5.97 5.97 0 008.5 2.71z" />
        </svg>
      ),
    },
    {
      id: "amazon",
      label: "Amazon TV",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.748.076-1.052-.872-1.238-1.276-1.814-2.108-1.734 1.768-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.165 1.716-.756 4.115-.891 5.949-1.1v-.41c0-.753.059-1.642-.383-2.294-.383-.579-1.124-.818-1.775-.818-1.207 0-2.284.618-2.548 1.897-.054.285-.265.567-.548.579l-3.064-.33C7.382 5.286 10.24 4 13.427 4c1.634 0 3.769.434 5.059 1.668 1.634 1.527 1.479 3.563 1.479 5.779v5.235c0 1.575.654 2.267 1.268 3.12.215.303.262.666-.012.891-.688.576-1.912 1.641-2.582 2.238l-.005-.004z" />
        </svg>
      ),
    },
    {
      id: "youtube",
      label: "YouTube TV",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      {platforms.map((p, i) => (
        <motion.div
          key={p.id}
          id={`platform-${p.id}`}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
        >
          {p.icon}
          <span className="text-sm font-medium tracking-wide">{p.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-10 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #0d9488 0%, #134e4a 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -right-40 top-1/4 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, #4c1d95 45%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <motion.p
          className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Start Your Day
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-5"
          style={{ fontFamily: "'Outfit', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Get More Inspired
          <br />
          Watching Great Movies
        </motion.h1>

        <motion.p
          className="text-sm md:text-base text-gray-400 max-w-sm mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Everything you need to entertain yourself and your family from anywhere you are
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <Link to="/signup">
            <motion.button
              id="get-started-btn"
              className="px-9 py-3.5 rounded-full font-semibold text-sm text-white cursor-pointer select-none"
              style={{
                background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #6d28d9 100%)",
                boxShadow: "0 0 35px rgba(124,58,237,0.5), 0 4px 15px rgba(0,0,0,0.4)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(124,58,237,0.7)" }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Video Preview Card */}
      <motion.div
        className="relative z-10 mt-12 w-full max-w-[580px] mx-auto"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(109,40,217,0.5) 0%, rgba(99,102,241,0.35) 50%, rgba(109,40,217,0.5) 100%)",
            filter: "blur(18px)",
            transform: "scale(1.03)",
          }}
        />
        <div
          className="relative rounded-2xl overflow-hidden border"
          style={{
            borderColor: "rgba(139,92,246,0.4)",
            boxShadow: "0 0 0 1px rgba(139,92,246,0.25), 0 25px 60px rgba(0,0,0,0.6)",
          }}
        >
          <div className="relative aspect-[16/9] bg-[#1a1025]">
            <img
              src="/images/hero-backdrop.png"
              alt="Featured movie preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                id="play-preview-btn"
                className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                  border: "2px solid rgba(255,255,255,0.35)",
                }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.93 }}
              >
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Platform logos */}
      <div className="relative z-10 mt-12 w-full">
        <PlatformLogos />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #080c1a 0%, #0f0a1f 40%, #0a1628 70%, #08101e 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}
