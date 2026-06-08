import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// ── Pricing plan data ─────────────────────────────────────────────────────────
const plans = [
  {
    id: "standard",
    name: "Standard",
    price: "Rp 380.000",
    period: "/bulan",
    features: [
      "2 Users Limits",
      "720 & 1080 Full HD",
      "TV & Laptop Streaming",
      "180 Movies Available",
      "24 Origin Countries",
    ],
    highlighted: false,
    btnLabel: "Subscribe Now",
  },
  {
    id: "gold",
    name: "Gold",
    price: "Rp 699.000",
    period: "/bulan",
    features: [
      "7 Users Limits",
      "Up To 8K Quality",
      "All Platforms Streaming",
      "900+ Movies Available",
      "120 Origin Countries",
    ],
    highlighted: true,
    btnLabel: "Subscribe Now",
  },
];

// ── Container animation ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ── PricingCard ───────────────────────────────────────────────────────────────
function PricingCard({ plan, onSubscribe }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-[2rem] p-8 flex flex-col gap-6 items-center text-center transition-all duration-300"
      style={{
        background: "#ffffff",
        boxShadow: hovered
          ? "0 28px 60px rgba(0,0,0,0.3)"
          : "0 16px 40px rgba(0,0,0,0.18)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        flex: "1 1 0",
        minWidth: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Plan name */}
      <h3
        className="text-base font-bold text-gray-900 tracking-wide"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {plan.name}
      </h3>

      {/* Price section */}
      <div className="flex flex-col">
        <span
          className="text-[2.2rem] font-bold text-gray-950 leading-none tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {plan.price}
        </span>
        <span className="text-xs text-gray-400 mt-1 font-medium">
          {plan.period}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Features */}
      <ul className="flex flex-col gap-4 items-center">
        {plan.features.map((feat) => (
          <li key={feat} className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-800">{feat}</span>
            <span
              className="mt-2 flex-shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center"
              style={{ background: "#d1fae5" }}
            >
              <svg
                className="w-3.5 h-3.5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <motion.button
        id={`subscribe-${plan.id}-btn`}
        onClick={onSubscribe}
        className="mt-2 w-full py-3.5 rounded-full font-semibold text-sm cursor-pointer select-none transition-all duration-200"
        style={
          plan.highlighted
            ? {
                background: "#4f46e5",
                color: "#ffffff",
                border: "none",
                boxShadow: "0 4px 18px rgba(79,70,229,0.35)",
                marginBottom: "6px",
              }
            : {
                background: "#ffffff",
                color: "#9ca3af",
                border: "1.5px solid #e5e7eb",
                marginBottom: "6px",
              }
        }
        whileHover={
          plan.highlighted
            ? {
                scale: 1.02,
                background: "#4338ca",
              }
            : {
                scale: 1.02,
                borderColor: "#9ca3af",
                color: "#4b5563",
              }
        }
        whileTap={{ scale: 0.97 }}
      >
        {plan.btnLabel}
      </motion.button>
    </motion.div>
  );
}

// ── PricingPage ───────────────────────────────────────────────────────────────
export default function PricingPage() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/payment-finish");
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── LEFT PANEL ────────────────────────────────────────────── */}
      <div className="hidden md:flex md:w-[30%] relative flex-col justify-end overflow-hidden">
        {/* Cozy living room / TV viewing background */}
        <img
          src="/images/movie4.png"
          alt="Cozy viewing atmosphere"
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

        {/* Subtle orange/sunset warm tint */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: "linear-gradient(160deg, #c0392b 0%, #d35400 100%)",
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
            Strean helps us to maintain our relationship to become much much
            better than previously
          </p>
          <p className="text-white font-bold text-sm tracking-wide">
            Janne Malayika
          </p>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL ───────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col px-8 md:px-14 py-7 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #08091a 0%, #0d0a20 55%, #0a0d1e 100%)",
        }}
      >
        {/* Purple glow — bottom right */}
        <div
          className="absolute -right-32 bottom-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />
        {/* Teal glow — top left */}
        <div
          className="absolute -left-24 top-0 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />

        {/* ── TOP BAR ─────────────────────────────────────────────── */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          {/* STREAM logo */}
          <motion.div
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
                    color: "#ffffff",
                    WebkitTextFillColor: "white",
                    display: "block",
                  }}
                >
                  STREAM
                </span>
            </Link>
          </motion.div>

          {/* Avatar / profile button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-white/10 transition-shadow duration-300"
            style={{
              background: "#d1d5db",
              border: "1.5px solid #ffffff",
            }}
          />
        </div>

        {/* ── CENTER CONTENT ──────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1">
          {/* Eyebrow label */}
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.28em] mb-3 text-center"
            style={{ color: "#4fc3f7" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            Start Your Day
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-3xl md:text-[2.2rem] font-bold text-white mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Up Your Imagination
          </motion.h1>

          {/* Pricing cards */}
          <motion.div
            className="w-full max-w-[680px] grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSubscribe={handleSubscribe}
              />
            ))}
          </motion.div>

          {/* Footer nav hint */}
          <motion.p
            className="text-center text-sm mt-8"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Already subscribed?{" "}
            <Link
              to="/signin"
              className="font-semibold transition-colors"
              style={{ color: "#a78bfa" }}
            >
              Sign In
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
