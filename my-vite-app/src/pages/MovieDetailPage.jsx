import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play, ChevronLeft, Star } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

// ── Google Fonts ──────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');`}</style>
);

// ── Video data ────────────────────────────────────────────────────────────────
const VIDEO = {
  title:  "IGITARAMO",
  rating: 4.5,
  score:  "9.00",
  image:  "/images/igitaramo.png",
  about:
    "Igitaramo mu muco nyarwanda cyari umwanya utagatifu w'umuco n'amateka, aho Umwami yakiraga Rubanda ye mu ngoro kugira ngo basangire, babyine imihamirizo, kandi baganire ku bibazo by'igihugu. Uyu muco watumaga habaho ubumwe, ubwiyunge, n'ubutabera, bituma abaturage bumva ko bayobowe n'umubyeyi utabera.",
};

const RECOMMENDED = [
  { id: 1, title: "King MUTARA 3 RUDAHIGWA", year: "2024", img: "/images/king-mutara.png"   },
  { id: 2, title: "Igisabo cy'u Rwanda",      year: "2024", img: "/images/payment-bg.png"    },
  { id: 3, title: "Inyambo z'u Rwanda",       year: "2024", img: "/images/geometric-pattern.png" },
  { id: 4, title: "Umuganura",                year: "2024", img: "/images/umuganura.png"     },
];

// ── Star Rating ───────────────────────────────────────────────────────────────
function StarRating({ value = 4.5 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled   = i <= Math.floor(value);
        const halfFill = !filled && i === Math.ceil(value) && value % 1 !== 0;
        return (
          <span key={i} style={{ position: "relative", display: "inline-block", width: 16, height: 16 }}>
            <Star size={16} style={{ color: "rgba(255,255,255,0.18)", position: "absolute", top: 0, left: 0 }} />
            <span style={{
              position: "absolute", top: 0, left: 0,
              overflow: "hidden",
              width: filled ? "100%" : halfFill ? "50%" : "0%",
            }}>
              <Star size={16} fill="#f59e0b" stroke="none" style={{ color: "#f59e0b" }} />
            </span>
          </span>
        );
      })}
    </div>
  );
}

// ── Recommended Card ──────────────────────────────────────────────────────────
function RecommendedCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      style={{
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        flex: 1,
        minWidth: 0,
        cursor: "pointer",
        boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.88) 0%, transparent 55%)",
      }} />
      <div style={{ position: "absolute", bottom: 10, left: 10, right: 6 }}>
        <p style={{
          color: "#fff",
          fontSize: "0.65rem",
          fontWeight: 600,
          fontFamily: "'Outfit', sans-serif",
          lineHeight: 1.3,
        }}>
          {item.title}
        </p>
        <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.55rem", marginTop: 2 }}>
          {item.year}
        </p>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MovieDetailPage() {
  const navigate = useNavigate();

  return (
    <>
      <FontStyle />
      <div style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        background: "#0b0c22",
      }}>
        {/* ── Sidebar ──────────────────────────────────────────── */}
        <DashboardSidebar active="watch" />

        {/* ── Main ─────────────────────────────────────────────── */}
        <main style={{
          flex: 1,
          overflowY: "auto",
          background: "#0d0e28",
          padding: "26px 26px 48px",
        }}>

          {/* ── Top bar ──────────────────────────────────────────── */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 18,
          }}>
            <div>
              <h1 style={{
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 4,
              }}>
                Watch Today
              </h1>
              <p style={{ color: "rgba(180,185,220,0.5)", fontSize: "0.78rem" }}>
                Our selected movies for your mood
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

          {/* ── Back button ─────────────────────────────────────── */}
          <motion.button
            onClick={() => navigate("/dashboard")}
            whileHover={{ x: -3 }}
            style={{
              display: "flex",
              alignItems: "center",
              background: "transparent",
              border: "none",
              color: "rgba(180,185,220,0.75)",
              cursor: "pointer",
              padding: "4px 0",
              marginBottom: 16,
            }}
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* ── Hero video thumbnail ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 16px 50px rgba(0,0,0,0.65)",
              marginBottom: 22,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <img
              src={VIDEO.image}
              alt={VIDEO.title}
              style={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Subtle overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(8,9,28,0.12) 0%, rgba(8,9,28,0.38) 100%)",
            }} />
            {/* Play button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 58, height: 58,
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.88)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
              }}
            >
              <Play size={24} fill="#6d28d9" stroke="none" style={{ marginLeft: 3 }} />
            </motion.button>
          </motion.div>

          {/* ── Video info ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {/* Title + Rating row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}>
              <h2 style={{
                color: "#fff",
                fontSize: "1.3rem",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.04em",
              }}>
                {VIDEO.title}
              </h2>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}>
                <StarRating value={VIDEO.rating} />
                <span style={{
                  color: "#fff",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {VIDEO.score}
                </span>
              </div>
            </div>

            {/* About section */}
            <h3 style={{
              color: "#fff",
              fontSize: "0.88rem",
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 10,
            }}>
              About
            </h3>
            <p style={{
              color: "rgba(180,185,220,0.65)",
              fontSize: "0.8rem",
              lineHeight: 1.78,
              marginBottom: 30,
              maxWidth: "680px",
            }}>
              {VIDEO.about}
            </p>

            {/* Recommended video section */}
            <h3 style={{
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 14,
            }}>
              Recommended video
            </h3>
            <div style={{ display: "flex", gap: 12 }}>
              {RECOMMENDED.map(item => (
                <RecommendedCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>

        </main>
      </div>
    </>
  );
}
