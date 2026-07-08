import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { newsItems } from '../data/films';

export default function NewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="relative section-padding">
      <div ref={ref} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium inline-flex items-center justify-center gap-2">
            <Newspaper className="w-4 h-4" />
            Latest Updates
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            News & Press
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 card-gap description-to-content">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group relative p-7 lg:p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/20 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] text-[#D4AF37] font-medium uppercase tracking-wider">{item.source}</span>
                    <span className="text-[10px] text-white/30">•</span>
                    <span className="text-[10px] text-white/30">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/10 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
