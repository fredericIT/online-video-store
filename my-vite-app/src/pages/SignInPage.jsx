import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/pricing");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── LEFT PANEL ──────────────────────────────────────────── */}
      <div className="hidden md:flex md:w-[30%] relative flex-col justify-end overflow-hidden">
        {/* Background image — outdoor cinema with palm trees */}
        <img
          src="/images/movie2.png"
          alt="Outdoor cinema experience"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,8,20,0.15) 0%, rgba(5,8,20,0.42) 45%, rgba(5,8,20,0.90) 100%)",
          }}
        />

        {/* Subtle tint */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "linear-gradient(170deg, #0d9488 0%, #4c1d95 100%)" }}
        />

        {/* Testimonial */}
        <motion.div
          className="relative z-10 p-8 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Strean helps us to maintain our relationship to become much much
            better than previously
          </p>
          <p className="text-white font-bold text-sm tracking-wide">
            Janne Malayika
          </p>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL ─────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #08091a 0%, #0d0a20 50%, #0a0d1e 100%)",
        }}
      >
        {/* Purple glow blob — bottom right */}
        <div
          className="absolute -right-32 bottom-0 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.24) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Teal glow blob — top left */}
        <div
          className="absolute -left-24 top-0 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />

        {/* STREAM logo — top center */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/">
            <span
              style={{
                fontFamily: "'Permanent Marker', 'Outfit', cursive",
                fontSize: "2rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                display: "block",
              }}
            >
              STREAM
            </span>
          </Link>
        </motion.div>

        {/* Form container */}
        <motion.div
          className="relative z-10 w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.28em] mb-3"
              style={{ color: "#4fc3f7" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Start Your Day
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Watch New Videos
            </motion.h1>
          </div>

          {/* White card form */}
          <motion.form
            id="signin-form"
            onSubmit={handleSubmit}
            className="rounded-2xl px-8 py-9 space-y-5"
            style={{
              background: "rgba(255,255,255,0.97)",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.38), inset 0 1px 1px rgba(255,255,255,0.6)",
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 mb-2"
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
                  padding: "11px 16px",
                  borderRadius: "10px",
                  border: "1.5px solid #e5e7eb",
                  fontSize: "14px",
                  color: "#374151",
                  outline: "none",
                  transition: "border-color 0.2s",
                  background: "#fff",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800 mb-2"
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
                  padding: "11px 16px",
                  borderRadius: "10px",
                  border: "1.5px solid #e5e7eb",
                  fontSize: "14px",
                  color: "#374151",
                  outline: "none",
                  transition: "border-color 0.2s",
                  background: "#fff",
                  boxSizing: "border-box",
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
              className="w-full text-white cursor-pointer select-none disabled:opacity-70 transition-all flex items-center justify-center gap-2"
              style={{
                marginTop: "10px",
                padding: "13px 0",
                borderRadius: "999px",
                background: "#4f46e5",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.01em",
                boxShadow: "0 4px 18px rgba(79,70,229,0.38)",
              }}
              whileHover={{
                scale: loading ? 1 : 1.02,
                background: "#4338ca",
              }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
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
            className="text-center text-sm mt-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold transition-colors"
              style={{ color: "#a78bfa" }}
            >
              Sign Up
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
