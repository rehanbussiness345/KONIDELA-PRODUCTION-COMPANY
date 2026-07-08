import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Calendar, Clapperboard } from 'lucide-react';
import { films } from '../data/films';
import type { Film } from '../data/films';

function FilmCard({ film, index }: { film: Film; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer"
        style={{
          transform: isHovered ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          {film.rating && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full">
              <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-xs font-semibold text-white">{film.rating}</span>
            </div>
          )}
          <div className="px-3 py-1.5 bg-[#D4AF37]/20 backdrop-blur-md rounded-full">
            <span className="text-xs font-semibold text-[#D4AF37]">{film.year}</span>
          </div>
        </div>

        {/* Hover overlay with details */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="bg-black/70 backdrop-blur-xl rounded-xl p-4 border border-white/10">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {film.genre.map(g => (
                <span key={g} className="px-2 py-0.5 text-[10px] font-medium bg-white/10 rounded-full text-white/80">
                  {g}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/70 leading-relaxed line-clamp-4 mb-3">{film.synopsis}</p>
            {film.streamingPlatform && (
              <div className="text-[10px] text-[#D4AF37] font-medium uppercase tracking-wider">
                Streaming · {film.streamingPlatform}
              </div>
            )}
          </div>
        </div>

        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
          style={{
            boxShadow: isHovered
              ? 'inset 0 0 0 2px rgba(212,175,55,0.4), 0 20px 60px -10px rgba(212,175,55,0.15)'
              : 'inset 0 0 0 1px rgba(255,255,255,0.06)'
          }}
        />
      </div>

      {/* Film info below card */}
      <div className="mt-5 px-1">
        <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
          {film.title}
        </h3>
        <div className="flex items-center gap-4 mt-2">
          <span className="flex items-center gap-1.5 text-xs text-white/40">
            <Clapperboard className="w-3 h-3" />
            {film.director}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/40">
            <Calendar className="w-3 h-3" />
            {film.year}
          </span>
        </div>
        <p className="text-xs text-white/30 mt-2">{film.cast.slice(0, 3).join(' · ')}</p>
      </div>
    </motion.div>
  );
}

export default function FilmsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="films" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div ref={sectionRef} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Our Productions</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Featured Films
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base leading-relaxed description-to-content">
            Blockbuster productions that have defined Telugu cinema, featuring iconic performances and groundbreaking visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 card-gap description-to-content">
          {films.map((film, i) => (
            <FilmCard key={film.id} film={film} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
