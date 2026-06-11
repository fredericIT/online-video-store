import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

const movies = [
  {
    id: 1,
    title: "The Final Ashes",
    genre: "Action",
    rating: 4.8,
    image: "/images/movie1.png",
  },
  {
    id: 2,
    title: "A Night in Paris",
    genre: "Romance",
    rating: 4.6,
    image: "/images/movie2.png",
  },
  {
    id: 3,
    title: "The Fallen Empire",
    genre: "Sci-Fi",
    rating: 4.9,
    image: "/images/movie3.png",
  },
  {
    id: 4,
    title: "The Inner Ascent",
    genre: "Drama",
    rating: 4.5,
    image: "/images/movie4.png",
  },
  {
    id: 5,
    title: "Night Hawk",
    genre: "Thriller",
    rating: 4.7,
    image: "/images/movie5.png",
  },
];

export default function MovieCarousel() {
  return (
    <section id="movies" className="relative py-16 md:py-24 px-6">
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          Trending Now
        </h2>
        <p className="text-text-secondary text-sm">
          Most watched movies this week
        </p>
      </motion.div>

      {/* Movie Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] group cursor-pointer snap-start"
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-bg-surface">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.div
                    className="w-14 h-14 rounded-full bg-rwanda-blue/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-rwanda-yellow/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </motion.div>
                </div>

                {/* Rating badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {movie.rating}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                    {movie.title}
                  </h3>
                  <span className="text-text-secondary text-xs">
                    {movie.genre}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edge gradient fades */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-bg-dark to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-bg-dark to-transparent pointer-events-none z-10" />
    </section>
  );
}
