import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

// ── Font ──────────────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');`}</style>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const INTERACT_WITH = [
  { id: 1, img: "/images/nuclear-family.png", title: "Umuryango"     },
  { id: 2, img: "/images/nyanza.png",         title: "Nyanza"        },
  { id: 3, img: "/images/inyambo.png",        title: "Inyambo"       },
  { id: 4, img: "/images/intore.png",         title: "Intore"        },
];

const LIKED_MOST = [
  { id: 1, img: "/images/king-mutara.png",  title: "King MUTARA 3 RUDAHIGWA" },
  { id: 2, img: "/images/igitaramo.png",    title: "Igitaramo Nyarwanda"     },
];

// ── Small interact card (with play button top-right) ─────────────────────────
function InteractCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      onClick={onClick}
      style={{
        flex: 1,
        minWidth: 0,
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        height: 190,
        cursor: "pointer",
        boxShadow: "0 8px 28px rgba(0,0,0,0.55)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* Dark gradient bottom */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.75) 0%, rgba(8,9,28,0.05) 50%)",
      }} />
      {/* Play button — top right */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        style={{
          position: "absolute",
          top: 10, right: 10,
          width: 28, height: 28,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.88)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
        }}
      >
        <Play size={12} fill="#6d28d9" stroke="none" style={{ marginLeft: 2 }} />
      </motion.div>
    </motion.div>
  );
}

// ── Large liked card ──────────────────────────────────────────────────────────
function LikedCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      onClick={onClick}
      style={{
        flex: 1,
        minWidth: 0,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        height: 200,
        cursor: "pointer",
        boxShadow: "0 10px 36px rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.88) 0%, rgba(8,9,28,0.05) 55%)",
      }} />
      <div style={{ position: "absolute", bottom: 14, left: 14, right: 10 }}>
        <p style={{
          color: "#fff",
          fontSize: "0.78rem",
          fontWeight: 700,
          fontFamily: "'Outfit', sans-serif",
          lineHeight: 1.3,
        }}>
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function FavoritesPage() {
  const navigate = useNavigate();
  const goDetail = () => navigate("/movie-detail");

  return (
    <>
      <FontStyle />
      <div style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        background: "#0b0c22",
      }}>
        {/* ── Sidebar ─────────────────────────────────────────── */}
        <DashboardSidebar active="favorites" />

        {/* ── Main ────────────────────────────────────────────── */}
        <main style={{
          flex: 1,
          overflowY: "auto",
          background: "#0d0e28",
          padding: "26px 24px 48px",
        }}>

          {/* ── MY FAVORITES badge header ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            <div style={{
              background: "rgba(255,255,255,0.07)",
              border: "1.5px solid rgba(255,255,255,0.1)",
              borderRadius: 99,
              padding: "10px 36px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}>
              <span style={{
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>
                My Favorites
              </span>
            </div>
          </motion.div>

          {/* ── What I like to interact with! ───────────────────── */}
          <motion.section
            style={{ marginBottom: 30 }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h2 style={{
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 14,
              letterSpacing: "0.01em",
            }}>
              What I like to interact with!
            </h2>
            <div style={{ display: "flex", gap: 12 }}>
              {INTERACT_WITH.map(item => (
                <InteractCard key={item.id} item={item} onClick={goDetail} />
              ))}
            </div>
          </motion.section>

          {/* ── What I like the most ─────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <h2 style={{
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 14,
              letterSpacing: "0.01em",
            }}>
              What I like the most
            </h2>
            <div style={{ display: "flex", gap: 14, maxWidth: 560 }}>
              {LIKED_MOST.map(item => (
                <LikedCard key={item.id} item={item} onClick={goDetail} />
              ))}
            </div>
          </motion.section>

        </main>
      </div>
    </>
  );
}
