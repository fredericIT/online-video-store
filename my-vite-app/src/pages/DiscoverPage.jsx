import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

// ── Font ──────────────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');`}</style>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const TOP_VIDEO = [
  { id: 1, title: "King MUTARA 3 RUDAHIGWA", year: "2024", img: "/images/king-mutara.png"   },
  { id: 2, title: "Igitaramo cy'umuryango",  year: "2024", img: "/images/igisabo.png"        },
  { id: 3, title: "Umuganura",               year: "2024", img: "/images/nuclear-family.png" },
  { id: 4, title: "Igisabo cy U RWANDA",     year: "2024", img: "/images/umuganura.png"      },
];

const MOST_LIKED = [
  { id: 1, rank: 1, title: "Intore",        year: "2024", img: "/images/intore.png"     },
  { id: 2, rank: 2, title: "Igitaramo",     year: "2024", img: "/images/igitaramo.png"  },
  { id: 3, rank: 3, title: "Nyanza Rwanda", year: "2024", img: "/images/nyanza.png"     },
  { id: 4, rank: 4, title: "Nyanza Rwanda", year: "2024", img: "/images/inyambo.png"    },
];

// All content items for search
const ALL_ITEMS = [...TOP_VIDEO, ...MOST_LIKED];

// ── Portrait card (Top Video) ─────────────────────────────────────────────────
function TopVideoCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      onClick={onClick}
      style={{
        flex: 1,
        minWidth: 0,
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        height: 200,
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
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.92) 0%, rgba(8,9,28,0.1) 60%)",
      }} />
      <div style={{ position: "absolute", bottom: 12, left: 12, right: 8 }}>
        <p style={{
          color: "#fff",
          fontSize: "0.72rem",
          fontWeight: 700,
          fontFamily: "'Outfit', sans-serif",
          lineHeight: 1.3,
        }}>
          {item.title}
        </p>
        <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.58rem", marginTop: 3 }}>
          {item.year}
        </p>
      </div>
    </motion.div>
  );
}

// ── Ranked portrait card (Most liked) ────────────────────────────────────────
function RankedCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      onClick={onClick}
      style={{
        flex: 1,
        minWidth: 0,
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        height: 200,
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
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.9) 0%, rgba(8,9,28,0.05) 65%)",
      }} />
      {/* Rank number */}
      <div style={{
        position: "absolute",
        bottom: 8, left: 10,
        fontSize: "3.2rem",
        fontWeight: 900,
        fontFamily: "'Outfit', sans-serif",
        color: "transparent",
        WebkitTextStroke: "2px rgba(255,255,255,0.85)",
        lineHeight: 1,
        userSelect: "none",
      }}>
        {item.rank}
      </div>
      {/* Title beside rank */}
      <div style={{
        position: "absolute",
        bottom: 14,
        left: item.rank >= 10 ? 52 : 46,
        right: 8,
      }}>
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

// ── Search result card ────────────────────────────────────────────────────────
function SearchCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      style={{
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        height: 140,
        cursor: "pointer",
        boxShadow: "0 6px 22px rgba(0,0,0,0.45)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,0.9) 0%, transparent 55%)",
      }} />
      <div style={{ position: "absolute", bottom: 10, left: 10 }}>
        <p style={{ color: "#fff", fontSize: "0.65rem", fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>
          {item.title}
        </p>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.55rem", marginTop: 2 }}>
          {item.year}
        </p>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DiscoverPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const goDetail = () => navigate("/movie-detail");

  const filtered = query.trim()
    ? ALL_ITEMS.filter(m => m.title.toLowerCase().includes(query.toLowerCase()))
    : null;

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
        <DashboardSidebar active="discover" />

        {/* ── Main ────────────────────────────────────────────── */}
        <main style={{
          flex: 1,
          overflowY: "auto",
          background: "#0d0e28",
          padding: "26px 24px 48px",
        }}>

          {/* ── Top bar ─────────────────────────────────────────── */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 20,
          }}>
            <div>
              <h1 style={{
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 4,
              }}>
                Discover
              </h1>
              <p style={{ color: "rgba(180,185,220,0.5)", fontSize: "0.78rem" }}>
                Explore Rwanda's rich cultural heritage
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

          {/* ── Search bar ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ position: "relative", marginBottom: 26 }}
          >
            <Search
              size={15}
              style={{
                position: "absolute", left: 18, top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(180,185,220,0.45)", pointerEvents: "none",
              }}
            />
            <input
              type="text"
              placeholder="Search your desired video here"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 42px 13px 44px",
                borderRadius: 99,
                background: "rgba(255,255,255,0.07)",
                border: "1.5px solid rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "0.85rem",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                boxSizing: "border-box",
                caretColor: "#7c3aed",
                transition: "border-color 0.2s",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{
                  position: "absolute", right: 14, top: "50%",
                  transform: "translateY(-50%)",
                  background: "none", border: "none",
                  cursor: "pointer", color: "rgba(180,185,220,0.5)",
                  display: "flex", alignItems: "center",
                }}
              >
                <X size={15} />
              </button>
            )}
          </motion.div>

          {/* ── Search results ──────────────────────────────────── */}
          {filtered ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 style={{
                color: "#fff", fontSize: "0.88rem", fontWeight: 700,
                fontFamily: "'Outfit', sans-serif", marginBottom: 12,
              }}>
                Search Results
              </h2>
              {filtered.length === 0 ? (
                <p style={{ color: "rgba(180,185,220,0.4)", fontSize: "0.8rem" }}>
                  No results found.
                </p>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                  {filtered.map(item => (
                    <SearchCard key={item.id + item.title} item={item} onClick={goDetail} />
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <>
              {/* ── BROWSER section title ──────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                style={{ marginBottom: 18 }}
              >
                <h2 style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>
                  Browser your desired video here
                </h2>
              </motion.div>

              {/* ── Top Video ──────────────────────────────────── */}
              <motion.section
                style={{ marginBottom: 28 }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <h3 style={{
                  color: "#fff",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: 12,
                }}>
                  Top Video
                </h3>
                <div style={{ display: "flex", gap: 12 }}>
                  {TOP_VIDEO.map(item => (
                    <TopVideoCard key={item.id} item={item} onClick={goDetail} />
                  ))}
                </div>
              </motion.section>

              {/* ── Most liked ─────────────────────────────────── */}
              <motion.section
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                <h3 style={{
                  color: "#fff",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: 12,
                }}>
                  Most liked
                </h3>
                <div style={{ display: "flex", gap: 12 }}>
                  {MOST_LIKED.map(item => (
                    <RankedCard key={item.id} item={item} onClick={goDetail} />
                  ))}
                </div>
              </motion.section>
            </>
          )}

        </main>
      </div>
    </>
  );
}
