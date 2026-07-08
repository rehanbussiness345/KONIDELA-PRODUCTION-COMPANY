import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';

const btsImages = [
  { src: "https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900", title: "On Set — Cinematography", description: "Behind the camera — crafting the perfect shot for our blockbuster productions" },
  { src: "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900", title: "Film Crew in Action", description: "Our dedicated crew working tirelessly to bring stories to life" },
  { src: "https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900", title: "Director's Vision", description: "Collaborating with India's finest directors to create cinematic masterpieces" },
  { src: "https://images.pexels.com/photos/7292783/pexels-photo-7292783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900", title: "Lighting & Atmosphere", description: "Creating dramatic mood and atmosphere through masterful lighting design" },
  { src: "https://images.pexels.com/photos/31158869/pexels-photo-31158869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900", title: "Cinema Technology", description: "State-of-the-art cameras and equipment powering our visual storytelling" },
  { src: "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900", title: "Studio Setup", description: "Professional studio environments for controlled, high-quality production" }
];

export default function BehindTheScenes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

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
            <Camera className="w-4 h-4" />
            Behind The Lens
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Behind The Scenes
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm description-to-content">
            A glimpse into the magic that happens behind the camera at Konidela Production Company.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 card-gap description-to-content">
          {btsImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i === 0 ? 'col-span-2 lg:col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-sm font-bold text-white">{img.title}</h3>
                <p className="text-xs text-white/60 mt-1">{img.description}</p>
              </div>
              <div className="absolute inset-0 rounded-xl border border-white/[0.06] group-hover:border-[#D4AF37]/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-20"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={btsImages[selected].src}
              alt={btsImages[selected].title}
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-lg font-bold text-white">{btsImages[selected].title}</h3>
              <p className="text-sm text-white/50 mt-1">{btsImages[selected].description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
