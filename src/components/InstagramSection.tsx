import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { InstagramIcon } from './Navbar';
import { ExternalLink } from 'lucide-react';

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const posts = [
    { image: "https://images.pexels.com/photos/7292783/pexels-photo-7292783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", caption: "Behind the camera" },
    { image: "https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", caption: "On set moments" },
    { image: "https://images.pexels.com/photos/31158869/pexels-photo-31158869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", caption: "Cinematic excellence" },
    { image: "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", caption: "Crew at work" },
    { image: "https://images.pexels.com/photos/8089650/pexels-photo-8089650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", caption: "Studio life" },
    { image: "https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400", caption: "Production magic" }
  ];

  return (
    <section className="relative section-padding overflow-hidden">
      <div ref={ref} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium inline-flex items-center justify-center gap-2">
            <InstagramIcon className="w-4 h-4" />
            @konidelapro
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Follow Our Journey
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm description-to-content">
            Stay updated with the latest from Konidela Production Company on Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 card-gap description-to-content">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/konidelapro/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.caption}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 rounded-xl border border-white/[0.06] group-hover:border-[#D4AF37]/30 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center description-to-content"
        >
          <a
            href="https://www.instagram.com/konidelapro/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 text-white/70 rounded-full text-sm hover:border-[#D4AF37]/30 hover:text-[#D4AF37] transition-all duration-300"
          >
            Follow @konidelapro
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
