import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7292783/pexels-photo-7292783.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Cinematic production"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 site-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
            Est. 2016 · Hyderabad, India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="text-gradient-gold">KONIDELA</span>
          <br />
          <span className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em]">
            PRODUCTION COMPANY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white/60 text-base sm:text-lg md:text-xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Crafting epic cinematic experiences that transcend borders. From blockbuster action epics to 
          heartfelt dramas — home of Megastar Chiranjeevi & Ram Charan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center button-gap"
        >
          <a
            href="#films"
            className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-semibold rounded-full text-sm tracking-wide hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 flex items-center gap-2"
          >
            Explore Films
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#upcoming"
            className="px-8 py-4 border border-white/20 text-white/80 rounded-full text-sm tracking-wide hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500"
          >
            Upcoming Releases
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 mx-auto"
        >
          {[
            { value: '4+', label: 'Major Films' },
            { value: '₹500Cr+', label: 'Box Office' },
            { value: '10+', label: 'Years Legacy' },
            { value: '1', label: 'Oscar Win' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs text-white/40 tracking-wider uppercase mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-[#D4AF37]/50" />
      </motion.div>
    </section>
  );
}
