import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline } from '../data/films';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div ref={ref} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Our Story</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            The Konidela Legacy
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed description-to-content">
            Founded in 2016 by actor and entrepreneur Ram Charan in Hyderabad, Konidela Production Company 
            is a family-driven banner dedicated to producing high-budget, star-driven Telugu cinema. Named in 
            honor of the Konidela family's deep-rooted legacy in Indian cinema, the company has produced some of 
            the most ambitious films in Tollywood history.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 card-gap description-to-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 lg:p-10 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/20 transition-colors duration-500"
          >
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Vision
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              To elevate Telugu cinema to a global stage through high-quality, culturally rooted storytelling. 
              We believe in creating films that honor our heritage while pushing the boundaries of modern filmmaking 
              with international production values, cutting-edge VFX, and multi-language releases across Telugu, 
              Hindi, Tamil, Kannada, and Malayalam.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 lg:p-10 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/20 transition-colors duration-500"
          >
            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Family
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              The Konidela family has been a cornerstone of Telugu cinema for over four decades. With Megastar 
              Chiranjeevi leading as the flagship actor and Ram Charan as the founder-producer, the company 
              carries forward the legacy established by Anjana Productions (founded in 1988). Films under the 
              banner are presented by Surekha Konidela, reflecting the family's deep commitment to cinema.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="text-center text-2xl sm:text-3xl font-bold mb-12 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}>
            Milestones
          </h3>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-[#0B0B0B] z-10 mt-2" />

                  <div className={`ml-12 lg:ml-0 lg:w-[45%] ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="p-6 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-[#D4AF37]/20 transition-all duration-500 group hover:bg-white/[0.05]">
                      <span className="text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {item.year}
                      </span>
                      <p className="text-white/60 text-sm mt-2 leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
