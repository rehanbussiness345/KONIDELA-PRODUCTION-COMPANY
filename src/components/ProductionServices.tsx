import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clapperboard, MonitorPlay, Globe, Sparkles, Users, Megaphone } from 'lucide-react';

const services = [
  { icon: Clapperboard, title: "Film Production", description: "End-to-end production of high-budget feature films with pan-Indian reach across Telugu, Hindi, Tamil, Kannada, and Malayalam markets." },
  { icon: MonitorPlay, title: "OTT & Digital Content", description: "Strategic content creation for leading OTT platforms including Netflix, Amazon Prime Video, and more." },
  { icon: Globe, title: "Multi-Language Releases", description: "Pan-India distribution strategy with simultaneous multi-language releases to maximize audience reach." },
  { icon: Sparkles, title: "VFX & Post-Production", description: "World-class visual effects and post-production capabilities, including collaborations with international VFX studios." },
  { icon: Users, title: "Talent Management", description: "Access to India's finest actors, directors, and technicians through the Konidela family's extensive industry network." },
  { icon: Megaphone, title: "Film Marketing", description: "Comprehensive marketing campaigns with nationwide promotional tours, digital campaigns, and strategic release planning." }
];

export default function ProductionServices() {
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
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">What We Do</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Production Services
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base description-to-content">
            From concept to screen — delivering world-class cinema with Indian soul.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 card-gap description-to-content">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="group relative p-7 lg:p-8 bg-white/[0.02] rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/20 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[radial-gradient(ellipse,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500"
          >
            Partner With Us
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
