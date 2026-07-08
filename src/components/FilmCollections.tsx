import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';

const collections = [
  {
    title: "Blockbuster Action",
    count: "2 Films",
    description: "High-octane, big-budget action spectacles featuring Megastar Chiranjeevi",
    image: "https://images.pexels.com/photos/7292783/pexels-photo-7292783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    films: ["Khaidi No. 150", "Acharya"]
  },
  {
    title: "Historical Epics",
    count: "1 Film",
    description: "Magnum opus productions honoring India's heritage and freedom struggle",
    image: "https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    films: ["Sye Raa Narasimha Reddy"]
  },
  {
    title: "Political Thrillers",
    count: "1 Film",
    description: "Gripping political dramas with pan-Indian star power",
    image: "https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    films: ["Godfather"]
  },
  {
    title: "Upcoming Productions",
    count: "1 Film",
    description: "The next generation of Konidela cinema arriving soon",
    image: "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    films: ["Peddi (2026)"]
  }
];

export default function FilmCollections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding">
      <div ref={ref} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium inline-flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Curated Collections
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Explore By Collection
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base leading-relaxed description-to-content">
            Discover our films organized by genre, era, and creative vision — each collection tells a distinct story of Indian cinema.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 card-gap description-to-content">
          {collections.map((collection, i) => (
            <motion.a
              key={collection.title}
              href="#films"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 bg-[#D4AF37]/20 backdrop-blur-md rounded-full border border-[#D4AF37]/30">
                <span className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {collection.count}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {collection.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  {collection.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {collection.films.map(film => (
                    <span key={film} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/70">
                      {film}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium group-hover:gap-3 transition-all duration-300">
                  Explore Collection
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-[#D4AF37]/30 transition-colors duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
