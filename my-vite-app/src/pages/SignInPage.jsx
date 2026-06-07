import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── LEFT PANEL ──────────────────────────────────────────── */}
      <div className="hidden md:flex md:w-[30%] relative flex-col justify-end overflow-hidden">
        {/* Background image — warm outdoor cinema feel */}
        <img
          src="/images/movie2.png"
          alt="Outdoor cinema experience"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark gradient overlay — heavy at bottom for text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,8,20,0.2) 0%, rgba(5,8,20,0.45) 45%, rgba(5,8,20,0.92) 100%)",
          }}
        />

        {/* Subtle color tint */}
        <div
          className="absolute inset-0 opacity-15"
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
            Stream helps us to maintain our relationship to become much much
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
        {/* Purple blob — bottom right */}
        <div
          className="absolute -right-32 bottom-0 w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Teal blob — top left */}
        <div
          className="absolute -left-24 top-0 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />

        {/* STREAM logo — top center of right panel */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/">
            <span
              className="text-2xl font-black tracking-widest text-white hover:text-purple-300 transition-colors"
              style={{
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.2em",
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
              className="text-xs font-bold uppercase tracking-[0.28em] text-teal-400 mb-3"
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
            className="rounded-2xl p-7 md:p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.97)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Email */}
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

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-gray-600 tracking-wide"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-purple-500 hover:text-purple-400 font-medium transition-colors"
                >
                  Forgot password?
                </a>
              </div>
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              id="continue-signin-btn"
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full font-semibold text-sm text-white cursor-pointer select-none disabled:opacity-70 transition-opacity"
              style={{
                background:
                  "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #6d28d9 100%)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              }}
              whileHover={{
                scale: loading ? 1 : 1.02,
                boxShadow: "0 6px 28px rgba(124,58,237,0.55)",
              }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
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
                </span>
              ) : (
                "Continue"
              )}
            </motion.button>
          </motion.form>

          {/* Create account link */}
          <motion.p
            className="text-center text-sm text-gray-500 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              Sign Up
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
