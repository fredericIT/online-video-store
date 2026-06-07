import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, delay },
});

export default function PaymentFinishPage() {
  return (
    <>
      {/* ── Google Font for sketch-style logo ─────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <div
        className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-10"
        style={{
          background:
            "linear-gradient(135deg, #07091a 0%, #0d0a1e 50%, #0a0c1c 100%)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* ── Ambient glow — teal left ─────────────────────────────── */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(13,148,136,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
            transform: "translate(-30%, -50%)",
          }}
        />

        {/* ── Ambient glow — purple/pink right ─────────────────────── */}
        <div
          className="absolute right-0 bottom-0 pointer-events-none"
          style={{
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,39,200,0.32) 0%, rgba(200,50,130,0.18) 50%, transparent 70%)",
            filter: "blur(85px)",
            transform: "translate(20%, 20%)",
          }}
        />

        {/* ── Subtle center vignette ───────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, rgba(7,9,26,0.4) 100%)",
          }}
        />

        {/* ── STREAM logo ──────────────────────────────────────────── */}
        <motion.div
          className="relative z-10 mb-8"
          {...fadeIn(0.1)}
        >
          <Link to="/">
            <span
              style={{
                fontFamily: "'Cabin Sketch', cursive",
                fontSize: "2rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textShadow: "0 0 30px rgba(255,255,255,0.08)",
                transition: "color 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c4b5fd")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            >
              STREAM
            </span>
          </Link>
        </motion.div>

        {/* ── Cinematic image card ─────────────────────────────────── */}
        <motion.div
          className="relative z-10 w-full"
          style={{ maxWidth: "360px" }}
          {...fadeUp(0.2)}
        >
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "16px",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <img
              src="/images/movie3.png"
              alt="Audience enjoying a movie screening"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            {/* subtle inner overlay for depth */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(7,9,26,0.05) 0%, rgba(7,9,26,0.28) 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* ── Heading ──────────────────────────────────────────────── */}
        <motion.h1
          className="relative z-10 mt-8 text-center font-bold text-white"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
          {...fadeUp(0.35)}
        >
          Payment Finish
        </motion.h1>

        {/* ── Subtitle ─────────────────────────────────────────────── */}
        <motion.p
          className="relative z-10 mt-3 text-center"
          style={{
            color: "rgba(180,185,220,0.75)",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            maxWidth: "260px",
          }}
          {...fadeUp(0.45)}
        >
          Time to enjoy yourself to watch great movies from around the world
        </motion.p>

        {/* ── Watch Now CTA ─────────────────────────────────────────── */}
        <motion.div
          className="relative z-10 mt-7"
          {...fadeUp(0.55)}
        >
          <Link to="/dashboard">
            <motion.button
              id="watch-now-btn"
              className="px-10 py-3 rounded-full font-semibold text-sm text-white cursor-pointer select-none"
              style={{
                background:
                  "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #6d28d9 100%)",
                boxShadow: "0 4px 22px rgba(124,58,237,0.48)",
                border: "none",
                outline: "none",
                fontFamily: "'Inter', sans-serif",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 30px rgba(124,58,237,0.65)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Watch Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
