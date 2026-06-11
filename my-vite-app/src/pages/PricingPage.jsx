import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// ── Pricing plan data ─────────────────────────────────────────────────────────
const plans = [
  {
    id: "free",
    name: "Free plan",
    price: null,
    period: null,
    features: [
      { text: "1 user limit", included: true },
      { text: "up to 480 pxl", included: true },
      { text: "Mobile Streaming", included: true },
      { text: "20 videos Available", included: true },
      { text: "No language translation", included: false },
    ],
    highlighted: false,
    btnLabel: "Subscribe Now",
  },
  {
    id: "standard",
    name: "Standard",
    price: "30,000 FRW",
    period: "/Month",
    features: [
      { text: "2 Users Limits", included: true },
      { text: "720 & 1080 Full HD", included: true },
      { text: "Mobile, TV & Laptop Streaming", included: true },
      { text: "180 videos Available", included: true },
      { text: "Up to 2 language translation", included: true },
    ],
    highlighted: false,
    btnLabel: "Subscribe Now",
  },
  {
    id: "gold",
    name: "Gold",
    price: "80,000 FRW",
    period: "/Month",
    features: [
      { text: "7 Users Limits", included: true },
      { text: "Up To 8K Quality", included: true },
      { text: "All Platforms Streaming", included: true },
      { text: "900+ videos Available", included: true },
      { text: "Up to 20 language translation", included: true },
    ],
    highlighted: true,
    btnLabel: "Subscribe Now",
  },
];

// ── Checkmark Icon ────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <span
      style={{
        flexShrink: 0,
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "#d1fae5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        style={{ width: "13px", height: "13px", color: "#059669" }}
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
  );
}

// ── Cross Icon ────────────────────────────────────────────────────────────────
function CrossIcon() {
  return (
    <span
      style={{
        flexShrink: 0,
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "#fee2e2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        style={{ width: "12px", height: "12px", color: "#dc2626" }}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  );
}

// ── Animation variants ────────────────────────────────────────────────────────
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
      style={{
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        padding: "28px 24px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        boxShadow: hovered
          ? "0 28px 60px rgba(0,0,0,0.3)"
          : "0 12px 36px rgba(0,0,0,0.15)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
        flex: "1 1 0",
        minWidth: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Plan name */}
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#111827",
          fontFamily: "'Inter', sans-serif",
          marginBottom: plan.price ? "4px" : "18px",
          fontStyle: plan.id === "free" ? "italic" : "normal",
        }}
      >
        {plan.name}
      </h3>

      {/* Price section */}
      {plan.price && (
        <div style={{ marginBottom: "18px" }}>
          <span
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#111827",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1,
            }}
          >
            {plan.price}
          </span>
          <span
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              fontWeight: 500,
              marginLeft: "2px",
            }}
          >
            {plan.period}
          </span>
        </div>
      )}

      {/* Features */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginBottom: "20px",
          flex: 1,
        }}
      >
        {plan.features.map((feat) => (
          <li
            key={feat.text}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "#374151",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {feat.text}
            </span>
            {feat.included ? <CheckIcon /> : <CrossIcon />}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <motion.button
        id={`subscribe-${plan.id}-btn`}
        onClick={onSubscribe}
        style={
          plan.highlighted
            ? {
                width: "100%",
                padding: "12px 0",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #7c3aed 100%)",
                border: "none",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(99,102,241,0.35)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.01em",
              }
            : {
                width: "100%",
                padding: "12px 0",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1.5px solid #d1d5db",
                fontSize: "14px",
                fontWeight: 500,
                color: "#9ca3af",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.01em",
              }
        }
        whileHover={
          plan.highlighted
            ? {
                scale: 1.03,
                boxShadow: "0 8px 28px rgba(99,102,241,0.45)",
              }
            : {
                scale: 1.03,
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
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── Full Background Image ──────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/images/pricing-bg.png"
          alt="Traditional Rwandan storytelling"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(
              to bottom,
              rgba(8, 5, 25, 0.6) 0%,
              rgba(8, 5, 25, 0.45) 40%,
              rgba(8, 5, 25, 0.5) 70%,
              rgba(8, 5, 25, 0.7) 100%
            )
          `,
        }}
      />

      {/* ── Content ────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 24px 40px",
        }}
      >
        {/* ── MENYA AMATEKA Logo ─────── */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "20px" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
              }}
            >
              MENYA AMATEKA
            </span>
          </Link>
        </motion.div>

        {/* ── Eyebrow label ─────── */}
        <motion.p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#06b6d4",
            marginBottom: "10px",
            textAlign: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          START YOUR DAY
        </motion.p>

        {/* ── Heading ─────── */}
        <motion.h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "'Outfit', sans-serif",
            marginBottom: "36px",
            textAlign: "center",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Up Your Imagination
        </motion.h1>

        {/* ── Pricing Cards ─────── */}
        <motion.div
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "32px",
          }}
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

        {/* Footer nav */}
        <motion.p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Already subscribed?{" "}
          <Link
            to="/signin"
            style={{
              fontWeight: 600,
              color: "#a78bfa",
              textDecoration: "none",
            }}
          >
            Sign In
          </Link>
        </motion.p>
      </div>

      {/* ── Responsive: stack cards on mobile ─────── */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
            max-width: 400px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
