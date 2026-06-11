import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Homepage Navbar ────────────────────────────────────────────────────────────
function HomeNavbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
      }}
    >
      {/* Left links */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {["Genre", "Featured", "Pricing"].map((link) => (
          <a
            key={link}
            href={link === "Pricing" ? "/pricing" : "#"}
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.85)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(255, 255, 255, 0.85)")
            }
          >
            {link}
          </a>
        ))}
      </div>

      {/* Center logo - MENYA AMATEKA */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "1.65rem",
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
      </div>

      {/* Right — Sign In */}
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <motion.button
          id="sign-in-btn"
          style={{
            padding: "8px 24px",
            borderRadius: "8px",
            border: "1.5px solid rgba(255, 255, 255, 0.35)",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "#fff",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.02em",
            transition: "all 0.3s ease",
          }}
          whileHover={{
            background: "rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.6)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Sign In
        </motion.button>
      </Link>
    </nav>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/images/rwandan-hut-bg.png"
          alt="Traditional Rwandan Hut"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Dark overlay with gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(
              to bottom,
              rgba(10, 5, 30, 0.55) 0%,
              rgba(10, 5, 30, 0.45) 30%,
              rgba(10, 5, 30, 0.5) 60%,
              rgba(10, 5, 30, 0.75) 100%
            )
          `,
        }}
      />

      {/* Side color tints (subtle purple/teal edges like in mockup) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: `
            linear-gradient(
              90deg,
              rgba(0, 200, 200, 0.12) 0%,
              transparent 25%,
              transparent 75%,
              rgba(140, 50, 200, 0.12) 100%
            )
          `,
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* START YOUR DAY label */}
        <motion.p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#06b6d4",
            marginBottom: "20px",
            fontFamily: "'Inter', sans-serif",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          START YOUR DAY
        </motion.p>

        {/* Main heading */}
        <motion.h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            fontFamily: "'Outfit', sans-serif",
            fontStyle: "italic",
            marginBottom: "16px",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Get More Inspired
          <br />
          Watching Our Rwanda
          <br />
          Traditional Videos
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255, 255, 255, 0.6)",
            maxWidth: "380px",
            lineHeight: 1.6,
            fontFamily: "'Inter', sans-serif",
            marginBottom: "32px",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Everything you need to entertain yourself and
          <br />
          your family from anywhere you are
        </motion.p>

        {/* Get Started button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <motion.button
              id="get-started-btn"
              style={{
                padding: "14px 36px",
                borderRadius: "50px",
                border: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#ffffff",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.02em",
                background:
                  "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #6366f1 100%)",
                boxShadow:
                  "0 0 35px rgba(124, 58, 237, 0.5), 0 4px 15px rgba(0,0,0,0.3)",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 50px rgba(124, 58, 237, 0.7), 0 8px 25px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0518",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <HomeNavbar />
      <HeroSection />
    </div>
  );
}
