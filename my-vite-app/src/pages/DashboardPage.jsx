import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

// ── Font import ───────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');`}</style>
);

// ── Rwandan cultural image data ───────────────────────────────────────────────
const CW_LARGE = [
  { id: 1, title: "Igitaramo Nyarwanda", year: "2024", img: "/images/igitaramo.png" },
  { id: 2, title: "Inyambo z'u Rwanda",  year: "2024", img: "/images/inyambo.png"   },
];

const TOP_VIDEO = [
  { id: 1, title: "King MUTARA 3 RUDAHIGWA", year: "2024", img: "/images/king-mutara.png"   },
  { id: 2, title: "Igitaramo cy umuryango",  year: "2024", img: "/images/igisabo.png"        },
  { id: 3, title: "Umuganura",               year: "2024", img: "/images/nuclear-family.png" },
  { id: 4, title: "Igisabo cy U RWANDA",     year: "2024", img: "/images/umuganura.png"      },
];

const MOST_LIKED = [
  { id: 1, rank: 1, title: "Intore",         year: "2024", img: "/images/intore.png"      },
  { id: 2, rank: 2, title: "Igitaramo",      year: "2024", img: "/images/igitaramo.png"   },
  { id: 3, rank: 3, title: "Nyanza Rwanda",  year: "2024", img: "/images/nyanza.png"      },
  { id: 4, rank: 4, title: "Inyambo",        year: "2024", img: "/images/inyambo.png"     },
];

// ── Section title ─────────────────────────────────────────────────────────────
const SecTitle = ({ children }) => (
  <h2 style={{
    color: "#fff",
    fontSize: "0.95rem",
    fontWeight: 700,
    fontFamily: "'Outfit', sans-serif",
    marginBottom: 12,
    letterSpacing: "0.01em",
  }}>
    {children}
  </h2>
);

// ── Large CW card ─────────────────────────────────────────────────────────────
function LargeCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      onClick={onClick}
      style={{
        flex: 1,
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        height: 190,
        cursor: "pointer",
        boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.85) 0%, rgba(8,9,28,0.05) 60%)",
      }} />
      <div style={{ position: "absolute", bottom: 12, left: 14 }}>
        <p style={{
          color: "#fff",
          fontSize: "0.78rem",
          fontWeight: 700,
          fontFamily: "'Outfit', sans-serif",
        }}>
          {item.title}
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", marginTop: 2 }}>
          {item.year}
        </p>
      </div>
    </motion.div>
  );
}

// ── Top Video card (no rank) ──────────────────────────────────────────────────
function TopVideoCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      style={{
        flex: 1,
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        height: 160,
        cursor: "pointer",
        minWidth: 0,
        boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.88) 0%, rgba(8,9,28,0.1) 65%)",
      }} />
      <div style={{ position: "absolute", bottom: 10, left: 10, right: 8 }}>
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

// ── Most Liked ranked card ────────────────────────────────────────────────────
function RankedCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      style={{
        flex: 1,
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        height: 160,
        cursor: "pointer",
        minWidth: 0,
        boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.88) 0%, rgba(8,9,28,0.1) 65%)",
      }} />
      {/* Rank number */}
      <div style={{
        position: "absolute",
        bottom: 6, left: 10,
        fontSize: "3rem",
        fontWeight: 900,
        fontFamily: "'Outfit', sans-serif",
        color: "transparent",
        WebkitTextStroke: "2px rgba(255,255,255,0.82)",
        lineHeight: 1,
        userSelect: "none",
      }}>
        {item.rank}
      </div>
      <div style={{
        position: "absolute",
        bottom: 10,
        left: item.rank >= 10 ? 50 : 42,
        right: 8,
      }}>
        <p style={{
          color: "#fff",
          fontSize: "0.62rem",
          fontWeight: 600,
          fontFamily: "'Outfit', sans-serif",
        }}>
          {item.title}
        </p>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.52rem", marginTop: 2 }}>
          {item.year}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function DashboardPage() {
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
        <DashboardSidebar active="watch" />

        {/* ── Main content ───────────────────────────────────── */}
        <main style={{
          flex: 1,
          overflowY: "auto",
          padding: "26px 24px 48px",
          background: "#0d0e28",
        }}>

          {/* ── Top bar ──────────────────────────────────────── */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 24,
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
              <p style={{
                color: "rgba(180,185,220,0.5)",
                fontSize: "0.78rem",
              }}>
                Our selected videos for your mood
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

          {/* ── Continue Watching — two large cards ──────────── */}
          <motion.section
            style={{ marginBottom: 28 }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <SecTitle>Continue Watching</SecTitle>
            <div style={{ display: "flex", gap: 14 }}>
              {CW_LARGE.map(item => (
                <LargeCard key={item.id} item={item} onClick={goDetail} />
              ))}
            </div>
          </motion.section>

          {/* ── Top Video ─────────────────────────────────────── */}
          <motion.section
            style={{ marginBottom: 28 }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <SecTitle>Top Video</SecTitle>
            <div style={{ display: "flex", gap: 12 }}>
              {TOP_VIDEO.map(item => (
                <TopVideoCard key={item.id} item={item} onClick={goDetail} />
              ))}
            </div>
          </motion.section>

          {/* ── Most liked ────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <SecTitle>Most liked</SecTitle>
            <div style={{ display: "flex", gap: 12 }}>
              {MOST_LIKED.map(item => (
                <RankedCard key={item.id} item={item} onClick={goDetail} />
              ))}
            </div>
          </motion.section>

        </main>
      </div>
    </>
  );
}
