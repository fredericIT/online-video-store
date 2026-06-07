import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Play } from "lucide-react";

// Testimonial data for left panel
const testimonial = {
  quote:
    "Stream helps us to maintain our relationship to become much much better than previously",
  author: "Janne Malayika",
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
      <div className="hidden md:flex md:w-[32%] relative flex-col justify-end overflow-hidden">
        {/* Cinematic background image */}
        <img
          src="/images/movie5.png"
          alt="Cinema experience"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay — stronger at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.88) 100%)",
          }}
        />

        {/* Subtle color tint overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "linear-gradient(135deg, #0d9488, #7c3aed)" }}
        />

        {/* Testimonial text */}
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
            "linear-gradient(135deg, #0a0e1a 0%, #0f0a20 50%, #0d1020 100%)",
        }}
      >
        {/* Purple glow blob — right */}
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Teal glow blob — top-left */}
        <div
          className="absolute -left-20 top-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Logo — mobile only */}
        <div className="md:hidden mb-8">
          <Link to="/">
            <span
              className="text-2xl font-black tracking-widest text-white"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "0.2em" }}
            >
              STREAM
            </span>
          </Link>
        </div>

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
              className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 mb-3"
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

          {/* Card */}
          <motion.form
            id="signup-form"
            onSubmit={handleSubmit}
            className="rounded-2xl p-7 md:p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.97)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide"
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
                className="w-full px-4 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 bg-white"
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide"
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
                className="w-full px-4 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 bg-white"
              />
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-11 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <motion.button
              id="continue-btn"
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full font-semibold text-sm text-white cursor-pointer select-none disabled:opacity-70 transition-opacity"
              style={{
                background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #6d28d9 100%)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              }}
              whileHover={{ scale: loading ? 1 : 1.02, boxShadow: "0 6px 25px rgba(124,58,237,0.55)" }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Creating account…
                </span>
              ) : (
                "Continue"
              )}
            </motion.button>
          </motion.form>

          {/* Sign in link */}
          <motion.p
            className="text-center text-sm text-gray-500 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              Sign In
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
