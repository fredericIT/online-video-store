import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

// ── Font import ───────────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Outfit:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');`}</style>
);

// ── Movie data ────────────────────────────────────────────────────────────────
const IMG = ["/images/movie1.png","/images/movie2.png","/images/movie3.png","/images/movie4.png","/images/movie5.png"];

const CW_LARGE = [
  { id:1, title:"Epidemic 1920", year:"2024", img: IMG[0] },
  { id:2, title:"Epidemic 1920", year:"2024", img: IMG[4] },
];
const CW_SMALL = [
  { id:1, title:"Epidemic 1920", year:"2024", img: IMG[0] },
  { id:2, title:"Police In Paris", year:"2024", img: IMG[1] },
  { id:3, title:"War 2099",       year:"2024", img: IMG[2] },
  { id:4, title:"Star Yoga",      year:"2024", img: IMG[3] },
  { id:5, title:"Epidemic 1920",  year:"2024", img: IMG[4] },
];
const TOP_MOVIES = [
  { id:1, rank:1, title:"Epidemic 1920", year:"2024", img: IMG[0] },
  { id:2, rank:2, title:"Epidemic 1920", year:"2024", img: IMG[1] },
  { id:3, rank:3, title:"Epidemic 1920", year:"2024", img: IMG[2] },
  { id:4, rank:4, title:"Epidemic 1920", year:"2024", img: IMG[3] },
];
const TOP_SERIES = [
  { id:1, rank:1, title:"Epidemic 1920", year:"2024", img: IMG[4] },
  { id:2, rank:2, title:"Epidemic 1920", year:"2024", img: IMG[3] },
  { id:3, rank:3, title:"Epidemic 1920", year:"2024", img: IMG[2] },
  { id:4, rank:4, title:"Epidemic 1920", year:"2024", img: IMG[1] },
];
const MOVIES = [
  { id:1, title:"Epidemic 1920", year:"2021", img: IMG[0] },
  { id:2, title:"Sugar Cars",    year:"2021", img: IMG[1] },
  { id:3, title:"Burning Sun",   year:"2021", img: IMG[2] },
  { id:4, title:"Zombie",        year:"2021", img: IMG[3] },
  { id:5, title:"Epidemic 1920", year:"2021", img: IMG[4] },
  { id:6, title:"Sugar Cars",    year:"2021", img: IMG[0] },
  { id:7, title:"Burning Sun",   year:"2021", img: IMG[1] },
  { id:8, title:"Zombie",        year:"2021", img: IMG[2] },
];

// ── Section title ─────────────────────────────────────────────────────────────
const SecTitle = ({ children }) => (
  <h2 style={{ color:"#fff", fontSize:"0.92rem", fontWeight:700, fontFamily:"'Outfit',sans-serif", marginBottom:10 }}>
    {children}
  </h2>
);

// ── Large CW card ─────────────────────────────────────────────────────────────
function LargeCard({ item, onClick }) {
  return (
    <motion.div whileHover={{ scale:1.02 }} onClick={onClick} style={{
      flex:1, borderRadius:14, overflow:"hidden", position:"relative",
      height:160, cursor:"pointer",
      boxShadow:"0 8px 30px rgba(0,0,0,.5)",
    }}>
      <img src={item.img} alt={item.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to top, rgba(8,9,28,.9) 0%, rgba(8,9,28,.1) 60%)",
      }} />
      <div style={{ position:"absolute", bottom:10, left:12 }}>
        <p style={{ color:"#fff", fontSize:"0.75rem", fontWeight:700, fontFamily:"'Outfit',sans-serif" }}>{item.title}</p>
        <p style={{ color:"rgba(255,255,255,.5)", fontSize:"0.62rem" }}>{item.year}</p>
      </div>
    </motion.div>
  );
}

// ── Small CW card ─────────────────────────────────────────────────────────────
function SmallCard({ item, onClick }) {
  return (
    <motion.div whileHover={{ scale:1.04 }} onClick={onClick} style={{
      borderRadius:10, overflow:"hidden", position:"relative",
      width:72, flexShrink:0, cursor:"pointer",
      boxShadow:"0 4px 18px rgba(0,0,0,.45)",
    }}>
      <img src={item.img} alt={item.title} style={{ width:"100%", height:95, objectFit:"cover", display:"block" }} />
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to top, rgba(8,9,28,.88) 0%, transparent 55%)",
      }} />
      <div style={{ position:"absolute", bottom:6, left:6, right:6 }}>
        <p style={{ color:"#fff", fontSize:"0.58rem", fontWeight:600, fontFamily:"'Outfit',sans-serif", lineHeight:1.2 }}>{item.title}</p>
        <p style={{ color:"rgba(255,255,255,.4)", fontSize:"0.5rem" }}>{item.year}</p>
      </div>
    </motion.div>
  );
}

// ── Ranked card ───────────────────────────────────────────────────────────────
function RankedCard({ item, onClick }) {
  return (
    <motion.div whileHover={{ scale:1.03 }} onClick={onClick} style={{
      flex:1, borderRadius:12, overflow:"hidden", position:"relative",
      height:150, cursor:"pointer", minWidth:0,
      boxShadow:"0 6px 24px rgba(0,0,0,.5)",
    }}>
      <img src={item.img} alt={item.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to top, rgba(8,9,28,.92) 0%, rgba(8,9,28,.15) 65%)",
      }} />
      {/* Rank number */}
      <div style={{
        position:"absolute", bottom:6, left:8,
        fontSize:"2.8rem", fontWeight:900,
        fontFamily:"'Outfit',sans-serif",
        color:"transparent",
        WebkitTextStroke:"2px rgba(255,255,255,0.75)",
        lineHeight:1,
      }}>{item.rank}</div>
      <div style={{ position:"absolute", bottom:8, left: item.rank > 1 ? 38 : 36, right:6 }}>
        <p style={{ color:"#fff", fontSize:"0.62rem", fontWeight:600, fontFamily:"'Outfit',sans-serif" }}>{item.title}</p>
        <p style={{ color:"rgba(255,255,255,.4)", fontSize:"0.52rem" }}>{item.year}</p>
      </div>
    </motion.div>
  );
}

// ── Movie grid card ───────────────────────────────────────────────────────────
function MovieCard({ item, onClick }) {
  return (
    <motion.div whileHover={{ scale:1.03 }} onClick={onClick} style={{
      borderRadius:10, overflow:"hidden", position:"relative",
      cursor:"pointer", boxShadow:"0 4px 18px rgba(0,0,0,.4)",
    }}>
      <img src={item.img} alt={item.title} style={{ width:"100%", height:100, objectFit:"cover", display:"block" }} />
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to top, rgba(8,9,28,.85) 0%, transparent 55%)",
      }} />
      <div style={{ position:"absolute", bottom:6, left:8 }}>
        <p style={{ color:"#fff", fontSize:"0.65rem", fontWeight:600, fontFamily:"'Outfit',sans-serif" }}>{item.title}</p>
        <p style={{ color:"rgba(255,255,255,.4)", fontSize:"0.55rem" }}>{item.year}</p>
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
        display:"flex", minHeight:"100vh", fontFamily:"'Inter',sans-serif",
        background:"#0b0c22",
      }}>
        <DashboardSidebar active="watch" />

        {/* Main content */}
        <main style={{
          flex:1, overflowY:"auto", padding:"24px 20px 40px",
          background:"#0d0e28",
        }}>
          {/* Top bar */}
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:20 }}>
            <div>
              <h1 style={{ color:"#fff", fontSize:"1.35rem", fontWeight:700, fontFamily:"'Outfit',sans-serif", marginBottom:4 }}>
                Watch Today
              </h1>
              <p style={{ color:"rgba(180,185,220,.55)", fontSize:"0.75rem" }}>
                Get refreshed movies for your mind
              </p>
            </div>
            <div style={{
              width:38, height:38, borderRadius:"50%", overflow:"hidden", flexShrink:0,
              boxShadow:"0 0 0 2px rgba(124,58,237,.5)",
            }}>
              <img src={IMG[1]} alt="avatar" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            </div>
          </div>

          {/* Continue Watching — large */}
          <section style={{ marginBottom:22 }}>
            <SecTitle>Continue Watching</SecTitle>
            <div style={{ display:"flex", gap:12 }}>
              {CW_LARGE.map(item => <LargeCard key={item.id} item={item} onClick={goDetail} />)}
            </div>
          </section>

          {/* Continue Watching — small */}
          <section style={{ marginBottom:22 }}>
            <SecTitle>Continue Watching</SecTitle>
            <div style={{ display:"flex", gap:10, overflowX:"auto", paddingBottom:4 }}>
              {CW_SMALL.map(item => <SmallCard key={item.id} item={item} onClick={goDetail} />)}
            </div>
          </section>

          {/* TOP Movie */}
          <section style={{ marginBottom:22 }}>
            <SecTitle>TOP Movie</SecTitle>
            <div style={{ display:"flex", gap:10 }}>
              {TOP_MOVIES.map(item => <RankedCard key={item.id} item={item} onClick={goDetail} />)}
            </div>
          </section>

          {/* TOP Series */}
          <section style={{ marginBottom:22 }}>
            <SecTitle>TOP Series</SecTitle>
            <div style={{ display:"flex", gap:10 }}>
              {TOP_SERIES.map(item => <RankedCard key={item.id} item={item} onClick={goDetail} />)}
            </div>
          </section>

          {/* Movie grid */}
          <section>
            <SecTitle>Movie</SecTitle>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
              {MOVIES.map(item => <MovieCard key={item.id} item={item} onClick={goDetail} />)}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
