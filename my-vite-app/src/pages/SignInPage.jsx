import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "../lib/auth";

export default function SignInPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const res = authenticateUser(form.email, form.password);
      setLoading(false);
      if (!res.success) {
        setError(res.message || "Invalid credentials");
        return;
      }
      navigate("/pricing");
    }, 500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── LEFT PANEL — Geometric Pattern Image ──────────────────── */}
      <div
        style={{
          display: "none",
          width: "28%",
          position: "relative",
          overflow: "hidden",
        }}
        className="left-panel"
      >
        <img
          src="/images/geometric-pattern.png"
          alt="Geometric pattern"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.18,
          }}
        />
        {/* Soft dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,6,28,0.45) 0%, rgba(30,10,80,0.35) 50%, rgba(8,6,28,0.55) 100%)",
          }}
        />
      </div>

      {/* ── RIGHT PANEL — Main Content ────────────────────────────── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #080c1a 0%, #0c0a1e 55%, #0a0e1c 100%)",
        }}
      >
        {/* Purple glow — bottom right */}
        <div
          style={{
            position: "absolute",
            right: "-80px",
            bottom: "0",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(140,40,220,0.25) 0%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />
        {/* Pink/red glow — bottom center */}
        <div
          style={{
            position: "absolute",
            right: "15%",
            bottom: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(200,50,100,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle teal glow — top left */}
        <div
          style={{
            position: "absolute",
            left: "-60px",
            top: "0",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Form container */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "440px",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ── MENYA AMATEKA Logo ─────── */}
          <motion.div
            style={{ textAlign: "center", marginBottom: "28px" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: "2rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#7c3aed",
                  textShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
                  display: "block",
                }}
              >
                MENYA AMATEKA
              </span>
            </Link>
          </motion.div>

          {/* ── Header ─────────────── */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <motion.p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "#06b6d4",
                marginBottom: "12px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              START YOUR DAY
            </motion.p>
            <motion.h1
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "'Outfit', sans-serif",
                margin: 0,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Watch New Videos
            </motion.h1>
          </div>

          {/* ── White Card Form ─────── */}
          <motion.form
            id="signin-form"
            onSubmit={handleSubmit}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "28px 28px 24px",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.38), inset 0 1px 1px rgba(255,255,255,0.6)",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {error && (
              <div
                style={{
                  fontSize: "13px",
                  color: "#dc2626",
                  marginBottom: "-8px",
                }}
              >
                {error}
              </div>
            )}

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#374151",
                  marginBottom: "6px",
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "8px",
                  border: "1.5px solid #e5e7eb",
                  fontSize: "14px",
                  color: "#374151",
                  outline: "none",
                  transition: "border-color 0.2s",
                  background: "#ffffff",
                  boxSizing: "border-box",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#374151",
                  marginBottom: "6px",
                }}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your Password"
                value={form.password}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "8px",
                  border: "1.5px solid #e5e7eb",
                  fontSize: "14px",
                  color: "#374151",
                  outline: "none",
                  transition: "border-color 0.2s",
                  background: "#ffffff",
                  boxSizing: "border-box",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </motion.div>

            {/* Continue button */}
            <motion.button
              id="continue-signin-btn"
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                marginTop: "4px",
                padding: "13px 0",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #6366f1 100%)",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: "#ffffff",
                cursor: "pointer",
                boxShadow: "0 6px 24px rgba(99,102,241,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontFamily: "'Inter', sans-serif",
                opacity: loading ? 0.7 : 1,
                transition: "all 0.2s",
              }}
              whileHover={{
                scale: loading ? 1 : 1.02,
                boxShadow: "0 8px 32px rgba(99,102,241,0.4)",
              }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin"
                    style={{ width: "16px", height: "16px" }}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      style={{ opacity: 0.25 }}
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      style={{ opacity: 0.75 }}
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Signing in…
                </>
              ) : (
                <span>Continue</span>
              )}
            </motion.button>
          </motion.form>

          {/* Create account link */}
          <motion.div
            style={{
              textAlign: "center",
              fontSize: "13px",
              marginTop: "20px",
              color: "rgba(255,255,255,0.6)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                fontWeight: 600,
                color: "#a78bfa",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              Sign Up
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Bottom-right cultural text ─────── */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "32px",
            textAlign: "right",
            zIndex: 5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "1.05rem",
              letterSpacing: "0.14em",
              lineHeight: 1.7,
              color: "#ffffff",
              textShadow:
                "0 0 18px rgba(6,182,212,0.9), 0 0 40px rgba(6,182,212,0.5), 0 2px 6px rgba(0,0,0,0.8)",
              margin: 0,
              fontWeight: 700,
            }}
          >
            DUKUNDE UMUCO WACU
            <br />
            UTAZAVAHO UCIKA.
          </p>
        </motion.div>
      </div>

      {/* Responsive left panel styles */}
      <style>{`
        @media (min-width: 768px) {
          .left-panel {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
