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
const IMG = [
  "/images/movie1.png",
  "/images/movie2.png",
  "/images/movie3.png",
  "/images/movie4.png",
  "/images/movie5.png",
];

const BROWSE = [
  { id: 1, title: "Epidemic 1920",  year: "2024", img: IMG[0] },
  { id: 2, title: "Police In Paris",year: "2024", img: IMG[1] },
  { id: 3, title: "War 2099",       year: "2024", img: IMG[2] },
  { id: 4, title: "Star Yoga",      year: "2024", img: IMG[3] },
  { id: 5, title: "Epidemic 1920",  year: "2024", img: IMG[4] },
];

const TOP_MOVIES = [
  { id: 1, rank: 1, title: "Epidemic 1920", year: "2024", img: IMG[0] },
  { id: 2, rank: 2, title: "Epidemic 1920", year: "2024", img: IMG[1] },
  { id: 3, rank: 3, title: "Epidemic 1920", year: "2024", img: IMG[2] },
  { id: 4, rank: 4, title: "Epidemic 1920", year: "2024", img: IMG[3] },
];

const TOP_SERIES = [
  { id: 1, rank: 1, title: "Epidemic 1920", year: "2024", img: IMG[4] },
  { id: 2, rank: 2, title: "Epidemic 1920", year: "2024", img: IMG[3] },
  { id: 3, rank: 3, title: "Epidemic 1920", year: "2024", img: IMG[2] },
  { id: 4, rank: 4, title: "Epidemic 1920", year: "2024", img: IMG[1] },
];

const MOVIES = [
  { id: 1, title: "Epidemic 1920", year: "2022", img: IMG[0] },
  { id: 2, title: "Sugar Cars",    year: "2019", img: IMG[1] },
  { id: 3, title: "Burning Sun",   year: "2022", img: IMG[2] },
  { id: 4, title: "Zombie",        year: "2021", img: IMG[3] },
  { id: 5, title: "Epidemic 1920", year: "2022", img: IMG[4] },
  { id: 6, title: "Sugar Cars",    year: "2019", img: IMG[0] },
  { id: 7, title: "Burning Sun",   year: "2022", img: IMG[1] },
  { id: 8, title: "Zombie",        year: "2021", img: IMG[2] },
];

// ── Section title ─────────────────────────────────────────────────────────────
const SecTitle = ({ children }) => (
  <h2 style={{
    color: "#fff", fontSize: "0.88rem", fontWeight: 700,
    fontFamily: "'Outfit',sans-serif", marginBottom: 10,
  }}>{children}</h2>
);

// ── Browse card (small horizontal) ───────────────────────────────────────────
function BrowseCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      onClick={() => {}}
      style={{
        borderRadius: 10, overflow: "hidden", position: "relative",
        width: 75, flexShrink: 0, cursor: "pointer",
        boxShadow: "0 4px 16px rgba(0,0,0,.45)",
      }}
    >
      <img src={item.img} alt={item.title}
        style={{ width: "100%", height: 95, objectFit: "cover", display: "block" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top,rgba(8,9,28,.9) 0%,transparent 55%)",
      }} />
      <div style={{ position: "absolute", bottom: 6, left: 6, right: 6 }}>
        <p style={{ color: "#fff", fontSize: "0.57rem", fontWeight: 600, fontFamily: "'Outfit',sans-serif", lineHeight: 1.2 }}>{item.title}</p>
        <p style={{ color: "rgba(255,255,255,.4)", fontSize: "0.5rem", marginTop: 1 }}>{item.year}</p>
      </div>
    </motion.div>
  );
}

// ── Ranked card ───────────────────────────────────────────────────────────────
function RankedCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      style={{
        flex: 1, borderRadius: 12, overflow: "hidden", position: "relative",
        height: 148, cursor: "pointer", minWidth: 0,
        boxShadow: "0 6px 24px rgba(0,0,0,.5)",
      }}
    >
      <img src={item.img} alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top,rgba(8,9,28,.92) 0%,rgba(8,9,28,.1) 65%)",
      }} />
      <div style={{
        position: "absolute", bottom: 5, left: 7,
        fontSize: "2.6rem", fontWeight: 900,
        fontFamily: "'Outfit',sans-serif",
        color: "transparent",
        WebkitTextStroke: "2px rgba(255,255,255,0.72)",
        lineHeight: 1,
      }}>{item.rank}</div>
      <div style={{ position: "absolute", bottom: 7, left: 38, right: 5 }}>
        <p style={{ color: "#fff", fontSize: "0.6rem", fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>{item.title}</p>
        <p style={{ color: "rgba(255,255,255,.38)", fontSize: "0.5rem" }}>{item.year}</p>
      </div>
    </motion.div>
  );
}

// ── Movie grid card ───────────────────────────────────────────────────────────
function MovieCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      style={{
        borderRadius: 10, overflow: "hidden", position: "relative",
        cursor: "pointer", boxShadow: "0 4px 18px rgba(0,0,0,.4)",
      }}
    >
      <img src={item.img} alt={item.title}
        style={{ width: "100%", height: 98, objectFit: "cover", display: "block" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top,rgba(8,9,28,.88) 0%,transparent 55%)",
      }} />
      <div style={{ position: "absolute", bottom: 6, left: 8 }}>
        <p style={{ color: "#fff", fontSize: "0.62rem", fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>{item.title}</p>
        <p style={{ color: "rgba(255,255,255,.4)", fontSize: "0.52rem" }}>{item.year}</p>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DiscoverPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = query.trim()
    ? [...BROWSE, ...MOVIES].filter(m =>
        m.title.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  return (
    <>
      <FontStyle />
      <div style={{
        display: "flex", minHeight: "100vh",
        fontFamily: "'Inter',sans-serif", background: "#0b0c22",
      }}>
        {/* Sidebar */}
        <DashboardSidebar active="discover" />

        {/* Main */}
        <main style={{
          flex: 1, overflowY: "auto",
          background: "#0d0e28",
          padding: "20px 18px 40px",
        }}>

          {/* ── Search bar ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "relative", marginBottom: 20,
            }}
          >
            <Search
              size={14}
              style={{
                position: "absolute", left: 14, top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(180,185,220,.4)", pointerEvents: "none",
              }}
            />
            <input
              type="text"
              placeholder="Search your desired video here"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                width: "100%", padding: "11px 36px 11px 36px",
                borderRadius: 99,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff", fontSize: "0.8rem",
                fontFamily: "'Inter',sans-serif",
                outline: "none", boxSizing: "border-box",
                caretColor: "#7c3aed",
              }}
            />
            {query && (
              <button onClick={() => setQuery("")} style={{
                position: "absolute", right: 12, top: "50%",
                transform: "translateY(-50%)", background: "none",
                border: "none", cursor: "pointer", color: "rgba(180,185,220,.5)",
                display: "flex", alignItems: "center",
              }}>
                <X size={14} />
              </button>
            )}
          </motion.div>

          {/* ── Search results ─────────────────────────────── */}
          {filtered ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <SecTitle>Search Results</SecTitle>
              {filtered.length === 0 ? (
                <p style={{ color: "rgba(180,185,220,.4)", fontSize: "0.8rem" }}>No results found.</p>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                  {filtered.map(item => <MovieCard key={item.id + item.title} item={item} />)}
                </div>
              )}
            </motion.div>
          ) : (
            <>
              {/* ── Browse section ────────────────────────── */}
              <motion.section
                style={{ marginBottom: 20 }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <SecTitle>Browse your desired video</SecTitle>
                <div style={{ display: "flex", gap: 9, overflowX: "auto", paddingBottom: 4 }}>
                  {BROWSE.map(item => <BrowseCard key={item.id} item={item} />)}
                </div>
              </motion.section>

              {/* ── TOP Movie ─────────────────────────────── */}
              <motion.section
                style={{ marginBottom: 20 }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <SecTitle>TOP Movie</SecTitle>
                <div style={{ display: "flex", gap: 9 }}>
                  {TOP_MOVIES.map(item => <RankedCard key={item.id} item={item} />)}
                </div>
              </motion.section>

              {/* ── TOP Series ────────────────────────────── */}
              <motion.section
                style={{ marginBottom: 20 }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                <SecTitle>TOP Series</SecTitle>
                <div style={{ display: "flex", gap: 9 }}>
                  {TOP_SERIES.map(item => <RankedCard key={item.id} item={item} />)}
                </div>
              </motion.section>

              {/* ── Movie grid ────────────────────────────── */}
              <motion.section
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28 }}
              >
                <SecTitle>Movie</SecTitle>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9 }}>
                  {MOVIES.map(item => <MovieCard key={item.id} item={item} />)}
                </div>
              </motion.section>
            </>
          )}
        </main>
      </div>
    </>
  );
}
