import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, User, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5"
    >
      {/* Logo */}
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
      >
        <span
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "1.6rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#ffffff",
            WebkitTextFillColor: "white",
            display: "block",
          }}
        >
          STREAM
        </span>
      </motion.div>

      {/* Center Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Movies", to: "/dashboard" },
          { label: "Series", to: "/dashboard" },
          { label: "Trending", to: "/discover" },
          { label: "Pricing", to: "/pricing" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (i + 1), duration: 0.4 }}
          >
            <Link
              to={item.to}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-300 relative group"
              style={{ textDecoration: "none" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <Search className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden md:flex relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full" />
        </Button>
        <Link to="/signin">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-purple-500/25 transition-shadow duration-300">
            <User className="w-4 h-4 text-white" />
          </div>
        </Link>
      </div>
    </motion.nav>
  );
}
