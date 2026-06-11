import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Monitor, Globe, Heart, Gift, CreditCard, LogOut } from "lucide-react";

const NAV_MAIN = [
  { id: "watch",     label: "Watch",        icon: Monitor, route: "/dashboard" },
  { id: "discover",  label: "Discover",     icon: Globe,   route: "/discover" },
  { id: "favorites", label: "My Favorites", icon: Heart,   badge: 8, route: "/favorites" },
  { id: "gift",      label: "Your Gift",    icon: Gift,   route: "/your-gift" },
];

const NAV_SEC = [
  { id: "sub",    label: "Subscription", icon: CreditCard, route: "/subscription" },
  { id: "logout", label: "Log Out",      icon: LogOut,     route: "/signin" },
];

export default function DashboardSidebar({ active = "watch" }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.route) navigate(item.route);
  };

  return (
    <aside style={{
      width: 200, minWidth: 200,
      background: "#0b0c1e",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column",
      padding: "28px 14px",
      position: "sticky", top: 0, height: "100vh",
      overflowY: "auto", flexShrink: 0,
    }}>

      {/* ── Logo: MENYA AMATEKA ───────────────────────────────── */}
      <Link to="/" style={{ textDecoration: "none", marginBottom: 32, display: "block" }}>
        <span style={{
          fontFamily: "'Cabin Sketch', cursive",
          fontSize: "1.35rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#ffffff",
          lineHeight: 1.15,
          display: "block",
          whiteSpace: "nowrap",
        }}>
          MENYA AMATEKA
        </span>
      </Link>

      {/* ── Primary nav ───────────────────────────────────────── */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {NAV_MAIN.map((item) => {
          const { id, label, icon: Icon, badge } = item;
          const on = active === id;
          return (
            <motion.button
              key={id}
              onClick={() => handleClick(item)}
              whileHover={{ x: 2 }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 12px", borderRadius: 10, border: "none",
                cursor: "pointer", textAlign: "left", width: "100%",
                background: on
                  ? "linear-gradient(135deg, rgba(99,102,241,0.5) 0%, rgba(124,58,237,0.4) 100%)"
                  : "transparent",
                color: on ? "#ffffff" : "rgba(180,185,220,0.6)",
                fontSize: "0.82rem", fontWeight: on ? 600 : 400,
                fontFamily: "'Inter', sans-serif",
                transition: "all 0.15s ease",
                boxShadow: on ? "0 2px 12px rgba(99,102,241,0.2)" : "none",
              }}
            >
              <Icon
                size={15}
                style={{
                  flexShrink: 0,
                  color: on ? "#a5b4fc" : "rgba(180,185,220,0.5)",
                }}
              />
              <span style={{ flex: 1 }}>{label}</span>
              {badge && (
                <span style={{
                  background: "#0d9488",
                  color: "#fff",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  borderRadius: "50%",
                  width: 18, height: 18,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {badge}
                </span>
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div style={{
        height: 1,
        background: "rgba(255,255,255,0.07)",
        margin: "16px 0",
      }} />

      {/* ── Secondary nav ─────────────────────────────────────── */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {NAV_SEC.map((item) => {
          const { id, label, icon: Icon } = item;
          const on = active === id;
          return (
            <motion.button
              key={id}
              onClick={() => handleClick(item)}
              whileHover={{ x: 2 }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 12px", borderRadius: 10, border: "none",
                cursor: "pointer",
                background: on
                  ? "linear-gradient(135deg, rgba(99,102,241,0.5) 0%, rgba(124,58,237,0.4) 100%)"
                  : "transparent",
                color: on ? "#ffffff" : "rgba(180,185,220,0.6)",
                fontSize: "0.82rem", fontWeight: on ? 600 : 400,
                fontFamily: "'Inter', sans-serif",
                textAlign: "left", width: "100%",
                transition: "all 0.15s ease",
              }}
            >
              <Icon
                size={15}
                style={{
                  flexShrink: 0,
                  color: on ? "#a5b4fc" : "rgba(180,185,220,0.5)",
                }}
              />
              {label}
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}
