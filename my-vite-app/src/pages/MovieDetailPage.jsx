import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Play, ChevronLeft, Star } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

// ── Google Fonts ──────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');`}</style>
);

// ── Movie data ────────────────────────────────────────────────────────────────
const MOVIE = {
  title:   "Pademic 1920",
  year:    "2019",
  country: "Korea Selatan",
  genres:  "Action, Drama, Comedy",
  rating:  4.5,
  score:   "9.00",
  image:   "/images/movie3.png",
  about:
    "Di tengah wabah pandemi mematikan yang melumpuhkan dunia, sekelompok orang asing terjebak di sebuah gedung apartemen yang dikarantina oleh pemerintah. Saat rasa takut, kelaparan, dan ketidakpercayaan semakin membesar, mereka dipaksa untuk bekerja sama demi bertahan hidup. Namun, ancaman bukan hanya berasal dari virus mematikan di luar—melainkan juga rahasia kelam yang tersembunyi di antara mereka.",
};

const IMG = ["/images/movie1.png","/images/movie2.png","/images/movie3.png","/images/movie4.png","/images/movie5.png"];

const RECOMMENDED = [
  { id: 1, title: "Epedimic 1920", year: "2021", img: IMG[0] },
  { id: 2, title: "Supar Cars",    year: "2019", img: IMG[1] },
  { id: 3, title: "Burning Sun",   year: "2023", img: IMG[2] },
  { id: 4, title: "Zombie",        year: "2022", img: IMG[3] },
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
            {/* Background star (empty) */}
            <Star size={16} style={{ color: "rgba(255,255,255,.2)", position: "absolute", top: 0, left: 0 }} />
            {/* Filled star (clip for half) */}
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
        borderRadius: 12, overflow: "hidden", position: "relative",
        flexShrink: 0, width: 155, cursor: "pointer",
        boxShadow: "0 6px 24px rgba(0,0,0,.5)",
      }}
    >
      <img src={item.img} alt={item.title} style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(8,9,28,.92) 0%, transparent 55%)",
      }} />
      <div style={{ position: "absolute", bottom: 10, left: 10 }}>
        <p style={{ color: "#fff", fontSize: "0.72rem", fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>{item.title}</p>
        <p style={{ color: "rgba(255,255,255,.45)", fontSize: "0.6rem", marginTop: 2 }}>{item.year}</p>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MovieDetailPage() {
  const navigate = useNavigate();
  const [navActive, setNavActive] = useState("watch");

  return (
    <>
      <FontStyle />
      <div style={{
        display: "flex", minHeight: "100vh",
        fontFamily: "'Inter',sans-serif",
        background: "#0b0c22",
      }}>
        {/* Sidebar */}
        <DashboardSidebar active="watch" />

        {/* Main */}
        <main style={{
          flex: 1, overflowY: "auto",
          background: "#0d0e28",
          display: "flex", flexDirection: "column",
        }}>
          {/* ── Top bar ──────────────────────────────────────────── */}
          <div style={{
            display: "flex", alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "24px 28px 0",
          }}>
            <div>
              <h1 style={{
                color: "#fff", fontSize: "1.35rem", fontWeight: 700,
                fontFamily: "'Outfit',sans-serif", marginBottom: 4,
              }}>Watch Today</h1>
              <p style={{ color: "rgba(180,185,220,.55)", fontSize: "0.75rem" }}>
                Our selected movies for your mood
              </p>
            </div>
            <div style={{
              width: 38, height: 38, borderRadius: "50%", overflow: "hidden", flexShrink: 0,
              boxShadow: "0 0 0 2px rgba(124,58,237,.5)",
            }}>
              <img src={IMG[1]} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* ── Scrollable content ────────────────────────────────── */}
          <div style={{ padding: "16px 28px 40px", flex: 1 }}>
            {/* Back button */}
            <motion.button
              onClick={() => navigate("/dashboard")}
              whileHover={{ x: -3 }}
              style={{
                display: "flex", alignItems: "center", gap: 4,
                background: "transparent", border: "none",
                color: "rgba(180,185,220,.8)", cursor: "pointer",
                fontSize: "0.85rem", fontFamily: "'Inter',sans-serif",
                padding: "4px 0", marginBottom: 16,
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* ── Hero image with play button ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "relative", borderRadius: 16, overflow: "hidden",
                boxShadow: "0 16px 50px rgba(0,0,0,.6)",
                marginBottom: 22,
              }}
            >
              <img
                src={MOVIE.image}
                alt={MOVIE.title}
                style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, rgba(8,9,28,.15) 0%, rgba(8,9,28,.45) 100%)",
              }} />
              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.94 }}
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 56, height: 56, borderRadius: "50%", border: "none",
                  background: "rgba(255,255,255,0.92)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,.4)",
                }}
              >
                <Play size={22} fill="#6d28d9" stroke="none" style={{ marginLeft: 3 }} />
              </motion.button>
            </motion.div>

            {/* ── Movie info ────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Title + Score row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                <h2 style={{
                  color: "#fff", fontSize: "1.4rem", fontWeight: 700,
                  fontFamily: "'Outfit',sans-serif",
                }}>{MOVIE.title}</h2>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, paddingTop: 4 }}>
                  <StarRating value={MOVIE.rating} />
                  <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>{MOVIE.score}</span>
                </div>
              </div>

              {/* Meta */}
              <p style={{ color: "rgba(180,185,220,.6)", fontSize: "0.75rem", marginBottom: 20 }}>
                {MOVIE.year}
                <span style={{ margin: "0 8px", opacity: 0.4 }}>|</span>
                {MOVIE.country}
                <span style={{ margin: "0 8px", opacity: 0.4 }}>|</span>
                {MOVIE.genres}
              </p>

              {/* About */}
              <h3 style={{
                color: "#fff", fontSize: "0.85rem", fontWeight: 600,
                fontFamily: "'Outfit',sans-serif", marginBottom: 10,
              }}>About</h3>
              <p style={{
                color: "rgba(180,185,220,.65)", fontSize: "0.78rem",
                lineHeight: 1.75, marginBottom: 28,
              }}>{MOVIE.about}</p>

              {/* Recommended */}
              <h3 style={{
                color: "#fff", fontSize: "0.95rem", fontWeight: 700,
                fontFamily: "'Outfit',sans-serif", marginBottom: 14,
              }}>Direkomendasikan untukmu</h3>
              <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
                {RECOMMENDED.map(item => <RecommendedCard key={item.id} item={item} />)}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
