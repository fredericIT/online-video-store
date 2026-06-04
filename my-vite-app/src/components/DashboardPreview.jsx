import { motion } from "framer-motion";
import {
  Play,
  Flame,
  List,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  Clock,
} from "lucide-react";

const sidebarItems = [
  { icon: Flame, label: "Popular", active: true },
  { icon: List, label: "Your List", active: false },
  { icon: CreditCard, label: "Subscription", active: false },
  { icon: Settings, label: "Account Settings", active: false },
  { icon: LogOut, label: "Log Out", active: false },
];

const continueWatching = [
  { title: "Endgame 1920", image: "/images/movie1.png", progress: 65 },
  { title: "A Night in Paris", image: "/images/movie2.png", progress: 30 },
  { title: "War 2099", image: "/images/movie3.png", progress: 80 },
  { title: "Hot Yoga", image: "/images/movie4.png", progress: 45 },
];

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-16 md:py-28 px-6">
      {/* Section intro */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Your Personal{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Dashboard
          </span>
        </h2>
        <p className="text-text-secondary">
          Track your watchlist, continue where you left off, and discover new
          favorites — all in one place.
        </p>
      </motion.div>

      {/* Laptop Mockup */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Screen */}
        <div className="relative rounded-t-2xl border border-white/10 bg-teal-dark overflow-hidden shadow-2xl shadow-black/50">
          {/* Top browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 mx-4">
              <div className="w-48 h-6 rounded-md bg-white/5 mx-auto" />
            </div>
          </div>

          {/* Dashboard content */}
          <div className="flex min-h-[420px] md:min-h-[500px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-52 border-r border-white/5 p-4 gap-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
                <span className="text-sm font-display font-bold text-white tracking-wide">
                  STREAM
                </span>
              </div>

              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${
                      item.active
                        ? "bg-white/10 text-white"
                        : "text-text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </div>
                );
              })}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6 overflow-hidden">
              {/* Hero Banner */}
              <div className="relative rounded-xl overflow-hidden mb-6 h-44 md:h-56">
                <img
                  src="/images/hero-backdrop.png"
                  alt="Featured movie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/95 via-teal-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-5 md:bottom-6 md:left-6">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                    Watch Today
                  </h3>
                  <p className="text-xs text-text-secondary mb-3 max-w-xs">
                    Our curation, made for your taste
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Watching */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <h4 className="text-sm font-semibold text-white">
                      Continue Watching
                    </h4>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-text-secondary hover:text-white transition-colors cursor-pointer">
                    See all <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {continueWatching.map((movie) => (
                    <div
                      key={movie.title}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-black/30 mb-2">
                        <img
                          src={movie.image}
                          alt={movie.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                          <div
                            className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                            style={{ width: `${movie.progress}%` }}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-text-secondary group-hover:text-white transition-colors truncate">
                        {movie.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Bottom (keyboard hinge) */}
        <div className="relative">
          <div className="h-5 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl mx-8 border-x border-b border-gray-600/50" />
          <div className="h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg mx-20" />
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-600 rounded-b-md" />
        </div>
      </motion.div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
