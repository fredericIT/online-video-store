import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ── Animation helpers ─────────────────────────────────────────────────────────
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
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px 16px",
        background:
          "linear-gradient(135deg, #07091a 0%, #0d0a1e 50%, #0a0c1c 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── Ambient glow — teal left ─────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translate(-30%, -50%)",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(13,148,136,0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Ambient glow — purple/pink right ─────────────────────── */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(139,39,200,0.32) 0%, rgba(200,50,130,0.18) 50%, transparent 70%)",
          filter: "blur(85px)",
          transform: "translate(20%, 20%)",
        }}
      />

      {/* ── MENYA AMATEKA Logo ─────── */}
      <motion.div
        style={{ position: "relative", zIndex: 10, marginBottom: "24px" }}
        {...fadeIn(0.1)}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "2.2rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#7c3aed",
              textShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
              display: "block",
              textAlign: "center",
            }}
          >
            MENYA AMATEKA
          </span>
        </Link>
      </motion.div>

      {/* ── Image card — Rwandan culture image only ───────────────── */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "360px",
        }}
        {...fadeUp(0.2)}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          <img
            src="/images/payment-bg.png"
            alt="Traditional Rwandan Intore dancers"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          {/* Subtle inner overlay for depth */}
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
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: "28px",
          textAlign: "center",
          fontWeight: 700,
          color: "#ffffff",
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
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: "12px",
          textAlign: "center",
          color: "rgba(180,185,220,0.75)",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          maxWidth: "280px",
        }}
        {...fadeUp(0.45)}
      >
        Time to enjoy yourself to watch great movies from around the world
      </motion.p>

      {/* ── Watch Now CTA ─────────────────────────────────────────── */}
      <motion.div
        style={{ position: "relative", zIndex: 10, marginTop: "28px" }}
        {...fadeUp(0.55)}
      >
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <motion.button
            id="watch-now-btn"
            style={{
              padding: "14px 40px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#ffffff",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.02em",
              background:
                "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #6d28d9 100%)",
              boxShadow: "0 4px 22px rgba(124,58,237,0.48)",
              border: "none",
              outline: "none",
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
  );
}
