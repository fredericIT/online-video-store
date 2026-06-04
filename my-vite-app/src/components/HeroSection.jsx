import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className="mb-6 gap-1.5">
            <Sparkles className="w-3 h-3" />
            Start Streaming
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Get More Inspired{" "}
          <br className="hidden sm:block" />
          Watching{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Great Movies
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Experience the world of entertainment at its finest. Stream thousands
          of movies and series in stunning quality, anytime, anywhere.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Browse Library
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center justify-center gap-8 md:gap-12 mt-14"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            { value: "10K+", label: "Movies" },
            { value: "4.9", label: "Rating" },
            { value: "50M+", label: "Users" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
