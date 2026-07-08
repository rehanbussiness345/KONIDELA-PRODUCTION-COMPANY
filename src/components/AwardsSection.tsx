import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import { awards } from '../data/films';

export default function AwardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2098604/pexels-photo-2098604.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Awards"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/95 to-[#0B0B0B]" />
      </div>

      <div ref={ref} className="relative site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium inline-flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4" />
            Recognition & Honors
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Awards & Accolades
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base description-to-content">
            Recognized on the world stage — from Filmfare to the Academy Awards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative description-to-content p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 via-white/[0.03] to-transparent border border-[#D4AF37]/20 text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              <Award className="w-8 h-8 text-black" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-gradient-gold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Academy Award Winner
            </h3>
            <p className="text-white/70 text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Best Original Song — "Naatu Naatu"
            </p>
            <p className="text-white/40 text-sm">
              RRR (2023) — starring Ram Charan, founder of Konidela Production Company
            </p>
            <p className="text-white/30 text-xs mt-4">
              Also won the Golden Globe Award for Best Original Song
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 card-gap description-to-content">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="group p-6 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-[#D4AF37]/20 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Star className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-xs text-white/50 mt-1">{award.category}</p>
                  <p className="text-xs text-white/30 mt-2">
                    {award.film} • {award.year}
                  </p>
                  <p className="text-xs text-[#D4AF37]/60 mt-1">{award.recipient}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
