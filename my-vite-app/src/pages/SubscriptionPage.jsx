import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, Layers } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

// ── Font ──────────────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');`}</style>
);

// ── Plan features ─────────────────────────────────────────────────────────────
const FEATURES = [
  "7 Users Limits",
  "Up To 8K Quality",
  "All Platforms Streaming",
  "900+ Movies Available",
  "120 Origin Countries",
];

// ── Progress bar ──────────────────────────────────────────────────────────────
function ProgressBar({ current = 11, total = 30 }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, marginBottom: 20 }}>
      <div style={{
        flex: 1, height: 5, borderRadius: 99,
        background: "rgba(255,255,255,0.1)", overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          style={{ height: "100%", borderRadius: 99, background: "linear-gradient(90deg,#0d9488,#14b8a6)" }}
        />
      </div>
      <span style={{ color: "rgba(180,185,220,.55)", fontSize: "0.7rem", whiteSpace: "nowrap" }}>
        {current}/{total} days
      </span>
    </div>
  );
}

// ── Feature row ───────────────────────────────────────────────────────────────
function Feature({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <span style={{
        width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
        background: "linear-gradient(135deg,#0d9488,#14b8a6)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Check size={12} color="#fff" strokeWidth={3} />
      </span>
      <span style={{ color: "#fff", fontSize: "0.83rem", fontFamily: "'Inter',sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SubscriptionPage() {
  const [navActive, setNavActive] = useState("subscription");
  const navigate = useNavigate();

  return (
    <>
      <FontStyle />
      <div style={{
        display: "flex", minHeight: "100vh",
        fontFamily: "'Inter',sans-serif", background: "#0b0c22",
      }}>
        {/* Sidebar */}
        <DashboardSidebar active="sub" />

        {/* Main */}
        <main style={{
          flex: 1, overflowY: "auto",
          background: "#0d0e28",
          padding: "24px 32px 48px",
        }}>
          {/* ── Top bar ────────────────────────────────────────── */}
          <div style={{
            display: "flex", alignItems: "flex-start",
            justifyContent: "space-between", marginBottom: 28,
          }}>
            <div>
              <h1 style={{
                color: "#fff", fontSize: "1.4rem", fontWeight: 700,
                fontFamily: "'Outfit',sans-serif", marginBottom: 4,
              }}>Subscription</h1>
              <p style={{ color: "rgba(180,185,220,.55)", fontSize: "0.75rem" }}>
                Spend to get more good memories
              </p>
            </div>
            <div style={{
              width: 38, height: 38, borderRadius: "50%", overflow: "hidden",
              boxShadow: "0 0 0 2px rgba(124,58,237,.5)", flexShrink: 0,
            }}>
              <img src="/images/movie2.png" alt="avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* ── Content wrapper (max width) ──────────────────── */}
          <div style={{ maxWidth: 480 }}>

            {/* ── Gold Package section ─────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Package header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 4 }}>
                {/* Icon */}
                <div style={{
                  width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                  background: "linear-gradient(135deg,#0d9488 0%,#6d28d9 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(13,148,136,0.4)",
                }}>
                  <Layers size={22} color="#fff" />
                </div>
                <h2 style={{
                  color: "#fff", fontSize: "1.15rem", fontWeight: 700,
                  fontFamily: "'Outfit',sans-serif",
                }}>Gold Package</h2>
              </div>

              {/* Progress */}
              <ProgressBar current={11} total={30} />

              {/* Features */}
              <div style={{ marginBottom: 24 }}>
                {FEATURES.map(f => <Feature key={f} label={f} />)}
              </div>

              {/* Make a Renewal button */}
              <motion.button
                id="renewal-btn"
                whileHover={{ scale: 1.02, boxShadow: "0 6px 28px rgba(124,58,237,0.6)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%", padding: "13px 0",
                  borderRadius: 99, border: "none", cursor: "pointer",
                  background: "linear-gradient(135deg,#5b21b6 0%,#7c3aed 50%,#6d28d9 100%)",
                  color: "#fff", fontSize: "0.88rem", fontWeight: 600,
                  fontFamily: "'Inter',sans-serif",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.45)",
                  marginBottom: 12,
                }}
              >
                Make a Renewal
              </motion.button>

              {/* Change Plan button */}
              <motion.button
                id="change-plan-btn"
                whileHover={{ borderColor: "rgba(180,185,220,.5)", color: "#fff" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/pricing")}
                style={{
                  width: "100%", padding: "12px 0",
                  borderRadius: 99, cursor: "pointer",
                  background: "rgba(255,255,255,0.04)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  color: "rgba(180,185,220,.7)", fontSize: "0.88rem",
                  fontWeight: 500, fontFamily: "'Inter',sans-serif",
                  marginBottom: 28, transition: "all .2s",
                }}
              >
                Change Plan
              </motion.button>
            </motion.div>

            {/* ── Danger Zone ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                borderRadius: 16, padding: "20px 22px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <h3 style={{
                color: "#ef4444", fontSize: "0.95rem", fontWeight: 700,
                fontFamily: "'Outfit',sans-serif", marginBottom: 10,
              }}>Danger Zone</h3>
              <p style={{
                color: "rgba(180,185,220,.6)", fontSize: "0.78rem",
                lineHeight: 1.7, marginBottom: 18,
              }}>
                If you wish to stop subscribe our movies please continue by clicking the button below. Make sure that you have read our terms &amp; conditions beforehand
              </p>
              <motion.button
                id="stop-subscribe-btn"
                whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(239,68,68,0.45)" }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: "10px 24px", borderRadius: 99, border: "none",
                  cursor: "pointer", background: "#ef4444",
                  color: "#fff", fontSize: "0.82rem", fontWeight: 600,
                  fontFamily: "'Inter',sans-serif",
                  boxShadow: "0 2px 12px rgba(239,68,68,0.35)",
                }}
              >
                Stop Subscribce
              </motion.button>
            </motion.div>

          </div>
        </main>
      </div>
    </>
  );
}
