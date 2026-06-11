import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Layers, Copy, CheckCircle } from "lucide-react";
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
  "Up to 20 languages translation",
];

const MY_CODE = "0090";

// ── Progress bar ──────────────────────────────────────────────────────────────
function ProgressBar({ current = 11, total = 30 }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, marginBottom: 22 }}>
      <div style={{
        flex: 1, height: 5, borderRadius: 99,
        background: "rgba(255,255,255,0.12)", overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          style={{
            height: "100%", borderRadius: 99,
            background: "linear-gradient(90deg, #0d9488, #14b8a6)",
          }}
        />
      </div>
      <span style={{ color: "rgba(180,185,220,0.6)", fontSize: "0.7rem", whiteSpace: "nowrap" }}>
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
        background: "linear-gradient(135deg, #0d9488, #14b8a6)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Check size={12} color="#fff" strokeWidth={3} />
      </span>
      <span style={{
        color: "#fff",
        fontSize: "0.84rem",
        fontFamily: "'Inter', sans-serif",
      }}>
        {label}
      </span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function YourGiftPage() {
  const [friendCode, setFriendCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState(null); // null | "success" | "error"

  const handleCopy = () => {
    navigator.clipboard.writeText(`Use ${MY_CODE} code to share your plan to your friends`).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleVerify = () => {
    if (!friendCode.trim()) return;
    if (friendCode.trim().toLowerCase() === "0090") {
      setVerifyStatus("error"); // same as own code — demo
    } else {
      setVerifyStatus("success");
    }
    setTimeout(() => setVerifyStatus(null), 3000);
  };

  return (
    <>
      <FontStyle />
      <div style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}>
        {/* ── Sidebar ──────────────────────────────────────────── */}
        <DashboardSidebar active="gift" />

        {/* ── Main — full background image ────────────────────── */}
        <main style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
        }}>

          {/* ── Background image ─────────────────────────────── */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/pricing-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }} />

          {/* ── Dark / purple overlay for legibility ──────────── */}
          <div style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(7,8,26,0.78) 0%, rgba(40,10,70,0.68) 50%, rgba(7,8,26,0.88) 100%)",
          }} />

          {/* ── Scrollable content layer ─────────────────────── */}
          <div style={{
            position: "relative",
            zIndex: 10,
            overflowY: "auto",
            height: "100vh",
            padding: "26px 32px 48px",
          }}>

            {/* ── Top bar ────────────────────────────────────── */}
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: 32,
            }}>
              <div>
                <h1 style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: 4,
                }}>
                  Share or be shared
                </h1>
                <p style={{ color: "rgba(180,185,220,0.55)", fontSize: "0.78rem" }}>
                  Spend to get more good memories
                </p>
              </div>
              {/* Avatar */}
              <div style={{
                width: 40, height: 40,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "0 0 0 2px rgba(99,102,241,0.5)",
                border: "2px solid rgba(255,255,255,0.1)",
              }}>
                <img
                  src="/images/igisabo.png"
                  alt="avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* ── Content card ───────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              style={{
                maxWidth: 460,
                background: "rgba(13,14,40,0.72)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "28px 28px 28px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
              }}
            >
              {/* ── Gold Package header ─────────────────────── */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 13, flexShrink: 0,
                  background: "linear-gradient(135deg, #0d9488 0%, #6d28d9 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 18px rgba(13,148,136,0.42)",
                }}>
                  <Layers size={22} color="#fff" />
                </div>
                <h2 style={{
                  color: "#fff",
                  fontSize: "1.18rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  Gold Package
                </h2>
              </div>

              {/* ── Progress ────────────────────────────────── */}
              <ProgressBar current={11} total={30} />

              {/* ── Features ────────────────────────────────── */}
              <div style={{ marginBottom: 26 }}>
                {FEATURES.map(f => <Feature key={f} label={f} />)}
              </div>

              {/* ── Share code button ───────────────────────── */}
              <motion.button
                id="share-code-btn"
                onClick={handleCopy}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(124,58,237,0.65)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%", padding: "13px 0",
                  borderRadius: 99, border: "none", cursor: "pointer",
                  background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #6d28d9 100%)",
                  color: "#fff", fontSize: "0.88rem", fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 4px 22px rgba(124,58,237,0.48)",
                  marginBottom: 14,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 9,
                  transition: "all 0.2s",
                }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <CheckCircle size={16} />
                      Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="share"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <Copy size={15} />
                      Use {MY_CODE} code to share your plan to your friends
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* ── Friend code input row ───────────────────── */}
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.06)",
                border: verifyStatus === "success"
                  ? "1.5px solid #0d9488"
                  : verifyStatus === "error"
                  ? "1.5px solid #ef4444"
                  : "1.5px solid rgba(255,255,255,0.13)",
                borderRadius: 99,
                padding: "0 18px",
                transition: "border-color 0.25s",
              }}>
                <input
                  id="friend-code-input"
                  type="text"
                  placeholder="Enter a code shared from your friend"
                  value={friendCode}
                  onChange={e => { setFriendCode(e.target.value); setVerifyStatus(null); }}
                  onKeyDown={e => e.key === "Enter" && handleVerify()}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "rgba(180,185,220,0.75)",
                    fontSize: "0.81rem",
                    fontFamily: "'Inter', sans-serif",
                    padding: "12px 0",
                    minWidth: 0,
                  }}
                />
                <motion.button
                  id="verify-btn"
                  onClick={handleVerify}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: verifyStatus === "success" ? "#0d9488" : verifyStatus === "error" ? "#ef4444" : "#facc15",
                    fontSize: "0.83rem",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    flexShrink: 0,
                    padding: "0 0 0 12px",
                    transition: "color 0.2s",
                    letterSpacing: "0.01em",
                  }}
                >
                  {verifyStatus === "success" ? "✓ Applied!" : verifyStatus === "error" ? "Invalid" : "Verify"}
                </motion.button>
              </div>

              {/* ── Micro status message ────────────────────── */}
              <AnimatePresence>
                {verifyStatus && (
                  <motion.p
                    key="status"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    style={{
                      marginTop: 8,
                      fontSize: "0.73rem",
                      fontFamily: "'Inter', sans-serif",
                      color: verifyStatus === "success" ? "#0d9488" : "#ef4444",
                      paddingLeft: 6,
                    }}
                  >
                    {verifyStatus === "success"
                      ? "Friend's code applied! Your plan has been extended."
                      : "That code is invalid or has already been used."}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </main>
      </div>
    </>
  );
}
