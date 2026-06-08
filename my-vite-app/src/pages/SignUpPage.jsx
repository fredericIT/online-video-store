import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Testimonial for left panel
const testimonial = {
  quote:
    "Strean helps us to maintain our relationship to become much much better than previously",
  author: "Janne Malayika",
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/signin");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── LEFT PANEL ──────────────────────────────────────────── */}
      <div className="hidden md:flex md:w-[30%] relative flex-col justify-end overflow-hidden">
        {/* Cinematic background image */}
        <img
          src="/images/movie5.png"
          alt="Cinema experience"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark gradient overlay — heavy at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.88) 100%)",
          }}
        />

        {/* Subtle warm/purple tint */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: "linear-gradient(160deg, #7b2d8b 0%, #c0392b 100%)",
          }}
        />

        {/* Testimonial */}
        <motion.div
          className="relative z-10 p-8 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            {testimonial.quote}
          </p>
          <p className="text-white font-bold text-sm tracking-wide">
            {testimonial.author}
          </p>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL ─────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #080c1a 0%, #0c0a1e 55%, #0a0e1c 100%)",
        }}
      >
        {/* Purple glow — bottom right */}
        <div
          className="absolute -right-24 bottom-0 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(100,30,200,0.28) 0%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />
        {/* Subtle teal glow — top left */}
        <div
          className="absolute -left-20 top-0 w-[280px] h-[280px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
            filter: "blur(52px)",
          }}
        />

        {/* Form container */}
        <motion.div
          className="relative z-10 w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ── Header ─────────────── */}
          <div className="text-center mb-8">
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.28em] mb-3"
              style={{ color: "#4fc3f7" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Start Sign Up
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Explore Videos
            </motion.h1>
          </div>

          {/* ── White Card Form ─────── */}
          <motion.form
            id="signup-form"
            onSubmit={handleSubmit}
            className="rounded-2xl px-8 py-9 space-y-5"
            style={{
              background: "rgba(255,255,255,0.97)",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.38), inset 0 1px 1px rgba(255,255,255,0.6)",
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Complete Name"
                value={form.name}
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
                onFocus={(e) =>
                  (e.target.style.borderColor = "#6366f1")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "#e5e7eb")
                }
              />
            </motion.div>

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
                onFocus={(e) =>
                  (e.target.style.borderColor = "#6366f1")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "#e5e7eb")
                }
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
                onFocus={(e) =>
                  (e.target.style.borderColor = "#6366f1")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "#e5e7eb")
                }
              />
            </motion.div>

            {/* Continue button */}
            <motion.button
              id="continue-signup-btn"
              type="submit"
              disabled={loading}
              className="w-full font-semibold text-sm text-white cursor-pointer select-none disabled:opacity-70 transition-all flex items-center justify-center gap-2"
              style={{
                marginTop: "10px",
                padding: "13px 0",
                borderRadius: "999px",
                background: "#4f46e5",
                border: "none",
                fontSize: "15px",
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
                  Creating account…
                </>
              ) : (
                <span>Continue</span>
              )}
            </motion.button>
          </motion.form>

          {/* Sign in link */}
          <motion.div
            className="text-center text-sm mt-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold transition-colors"
              style={{ color: "#a78bfa" }}
            >
              Sign In
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
