import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Layers, Globe, Heart, Monitor, Gift, CreditCard, User, LogOut } from "lucide-react";

const NAV_MAIN = [
  { id: "watch", label: "Watch", icon: Layers, route: "/dashboard" },
  { id: "discover", label: "Discover", icon: Globe, route: "/discover" },
  { id: "favorites", label: "My Favorites", icon: Heart, badge: 6 },
  { id: "playlist", label: "Playlist", icon: Monitor },
  { id: "gift", label: "Your Gift", icon: Gift },
];
const NAV_SEC = [
  { id: "sub", label: "Subscription", icon: CreditCard, route: "/subscription" },
  { id: "settings", label: "Account Settings", icon: User, route: "/account-settings" },
  { id: "logout", label: "Log Out", icon: LogOut, route: "/signin" },
];

export default function DashboardSidebar({ active = "watch" }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <aside style={{
      width: 190, minWidth: 190, background: "#09091f",
      borderRight: "1px solid rgba(255,255,255,0.05)",
      display: "flex", flexDirection: "column",
      padding: "24px 14px",
      position: "sticky", top: 0, height: "100vh",
      overflowY: "auto", flexShrink: 0,
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", marginBottom: 28, display: "block" }}>
        <span style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: "1.5rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #60a5fa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "block",
        }}>STREAM</span>
      </Link>

      {/* Primary nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {NAV_MAIN.map((item) => {
          const { id, label, icon: Icon, badge } = item;
          const on = active === id;
          return (
            <motion.button key={id}
              onClick={() => handleClick(item)}
              whileHover={{ x: 2 }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 11px", borderRadius: 10, border: "none",
                cursor: "pointer", textAlign: "left", width: "100%",
                background: on
                  ? "linear-gradient(135deg,rgba(109,40,217,.45),rgba(124,58,237,.28))"
                  : "transparent",
                color: on ? "#fff" : "rgba(180,185,220,.65)",
                fontSize: "0.8rem", fontWeight: on ? 600 : 400,
                fontFamily: "'Inter',sans-serif", transition: "color .15s",
              }}>
              <Icon size={15} style={{ flexShrink: 0, color: on ? "#a78bfa" : "inherit" }} />
              <span style={{ flex: 1 }}>{label}</span>
              {badge && (
                <span style={{
                  background: "#0d9488", color: "#fff", fontSize: "0.62rem",
                  fontWeight: 700, borderRadius: "50%", width: 17, height: 17,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{badge}</span>
              )}
            </motion.button>
          );
        })}
      </nav>

      <div style={{ height: 1, background: "rgba(255,255,255,.07)", margin: "14px 0" }} />

      {/* Secondary nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {NAV_SEC.map((item) => {
          const { id, label, icon: Icon } = item;
          const on = active === id;
          return (
            <motion.button key={id}
              onClick={() => handleClick(item)}
              whileHover={{ x: 2 }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 11px", borderRadius: 10, border: "none",
                cursor: "pointer",
                background: on
                  ? "linear-gradient(135deg,rgba(109,40,217,.45),rgba(124,58,237,.28))"
                  : "transparent",
                color: on ? "#fff" : "rgba(180,185,220,.65)",
                fontSize: "0.8rem", fontWeight: on ? 600 : 400,
                fontFamily: "'Inter',sans-serif", textAlign: "left", width: "100%",
                transition: "color .15s",
              }}>
              <Icon size={15} style={{ flexShrink: 0, color: on ? "#a78bfa" : "inherit" }} />
              {label}
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}
