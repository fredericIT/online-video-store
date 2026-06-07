import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Check, User } from "lucide-react";

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
function PricingCard({ plan, index, onSubscribe }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
      style={{
        background: plan.highlighted
          ? "linear-gradient(145deg, rgba(255,255,255,0.97) 0%, rgba(248,246,255,0.97) 100%)"
          : "rgba(255,255,255,0.96)",
        boxShadow: plan.highlighted
          ? hovered
            ? "0 28px 70px rgba(109,40,217,0.38), 0 0 0 2px rgba(124,58,237,0.3)"
            : "0 20px 55px rgba(109,40,217,0.28), 0 0 0 1.5px rgba(124,58,237,0.18)"
          : hovered
          ? "0 20px 50px rgba(0,0,0,0.22)"
          : "0 16px 45px rgba(0,0,0,0.15)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        flex: "1 1 0",
        minWidth: 0,
      }}
    >
      {/* Plan name */}
      <p
        className="text-sm font-semibold text-gray-700 tracking-wide"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {plan.name}
      </p>

      {/* Price */}
      <div>
        <span
          className="text-2xl font-black text-gray-900"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {plan.price}
        </span>
        <span className="text-xs text-amber-500 font-semibold ml-1">
          {plan.period}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{feat}</span>
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                background: plan.highlighted
                  ? "linear-gradient(135deg, #6d28d9, #7c3aed)"
                  : "linear-gradient(135deg, #6d28d9, #7c3aed)",
              }}
            >
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <motion.button
        id={`subscribe-${plan.id}-btn`}
        onClick={onSubscribe}
        className="mt-2 w-full py-3 rounded-full font-semibold text-sm cursor-pointer select-none transition-all duration-200"
        style={
          plan.highlighted
            ? {
                background:
                  "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #6d28d9 100%)",
                color: "#fff",
                boxShadow: "0 4px 18px rgba(124,58,237,0.45)",
              }
            : {
                background: "transparent",
                color: "#374151",
                border: "1.5px solid #d1d5db",
              }
        }
        whileHover={
          plan.highlighted
            ? {
                scale: 1.02,
                boxShadow: "0 6px 26px rgba(124,58,237,0.6)",
              }
            : { scale: 1.02, borderColor: "#7c3aed", color: "#6d28d9" }
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
        {/* Cinematic background */}
        <img
          src="/images/movie4.png"
          alt="Cinematic atmosphere"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,8,20,0.18) 0%, rgba(5,8,20,0.48) 45%, rgba(5,8,20,0.93) 100%)",
          }}
        />

        {/* Subtle teal-purple tint */}
        <div
          className="absolute inset-0 opacity-18"
          style={{
            background: "linear-gradient(160deg, #0d9488 0%, #4c1d95 100%)",
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

          {/* Avatar / profile button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-white/10 transition-shadow duration-300"
          >
            <User className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        {/* ── CENTER CONTENT ──────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1">
          {/* Eyebrow label */}
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.28em] text-teal-400 mb-3"
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
            className="w-full max-w-[640px] grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {plans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} onSubscribe={handleSubscribe} />
            ))}
          </motion.div>

          {/* Footer nav hint */}
          <motion.p
            className="text-center text-sm text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Already subscribed?{" "}
            <Link
              to="/signin"
              className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              Sign In
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
