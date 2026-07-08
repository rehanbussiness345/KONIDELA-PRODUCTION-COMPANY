import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CinematicQuote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(193,18,31,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div ref={ref} className="site-container max-w-[1000px] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 0.2, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl lg:text-9xl text-[#D4AF37] block leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-white/80 leading-relaxed -mt-10 mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
          >
            Every frame we craft tells a story of our land, our heroes, and our indomitable spirit. 
            Cinema is our legacy.
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-16 h-px bg-[#D4AF37]/40 mx-auto mb-4" />
            <p className="text-sm text-[#D4AF37] tracking-widest uppercase font-medium">
              Konidela Production Company
            </p>
            <p className="text-xs text-white/30 mt-1">
              Hyderabad, India • Est. 2016
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
