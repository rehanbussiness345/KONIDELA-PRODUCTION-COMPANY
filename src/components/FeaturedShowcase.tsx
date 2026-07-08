import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const featured = [
  {
    title: "Sye Raa Narasimha Reddy",
    subtitle: "A Historical Epic",
    year: "2019",
    rating: "7.2",
    genre: "Historical • Action • Epic",
    cast: "Chiranjeevi · Amitabh Bachchan · Nayanthara",
    description: "The story of India's first freedom fighter, Uyyalawada Narasimha Reddy, who waged a rebellion against the British East India Company in 1846. A ₹270 crore magnum opus featuring a stellar pan-Indian cast.",
    image: "https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&w=1920",
    platform: "Netflix"
  },
  {
    title: "Khaidi No. 150",
    subtitle: "The Grand Comeback",
    year: "2017",
    rating: "5.8",
    genre: "Action • Comedy • Drama",
    cast: "Chiranjeevi · Kajal Aggarwal",
    description: "Megastar Chiranjeevi's landmark 150th film and grand comeback to cinema after a decade-long hiatus. The film that launched Konidela Production Company and became one of the biggest blockbusters of 2017.",
    image: "https://images.pexels.com/photos/7292783/pexels-photo-7292783.jpeg?auto=compress&cs=tinysrgb&w=1920",
    platform: "Amazon Prime Video"
  },
  {
    title: "Godfather",
    subtitle: "Power Meets Legacy",
    year: "2022",
    rating: "5.1",
    genre: "Political • Action • Thriller",
    cast: "Chiranjeevi · Salman Khan · Nayanthara",
    description: "A political action thriller featuring Salman Khan's debut in Telugu cinema alongside Megastar Chiranjeevi. A gripping tale of power, loyalty, and political warfare.",
    image: "https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?auto=compress&cs=tinysrgb&w=1920",
    platform: "Netflix"
  }
];

export default function FeaturedShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const item = featured[current];

  const next = () => setCurrent((c) => (c + 1) % featured.length);
  const prev = () => setCurrent((c) => (c - 1 + featured.length) % featured.length);

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 transition-all duration-1000">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover opacity-20 scale-110 blur-sm"
          key={item.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
      </div>

      <div ref={ref} className="relative site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Featured Production</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <motion.div
            key={item.title + '-text'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#D4AF37]/60 text-xs">{item.year}</span>
              <span className="w-8 h-px bg-[#D4AF37]/30" />
              <span className="text-white/30 text-xs">{item.genre}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-2 leading-[0.95]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }}>
              {item.title}
            </h2>
            <h3 className="text-lg sm:text-xl text-[#D4AF37]/80 mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              {item.subtitle}
            </h3>

            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              {item.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              {item.rating && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] rounded-full">
                  <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-sm font-semibold text-white">{item.rating}</span>
                  <span className="text-xs text-white/30">IMDb</span>
                </div>
              )}
              <span className="text-xs text-white/30">Streaming on {item.platform}</span>
            </div>

            <p className="text-xs text-white/30 mb-8">Starring: {item.cast}</p>

            <div className="flex items-center button-gap">
              <a
                href="#films"
                className="group flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                View Film Details
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#upcoming"
                className="px-7 py-3.5 border border-white/15 text-white/70 rounded-full text-sm hover:border-[#D4AF37]/30 hover:text-[#D4AF37] transition-all duration-300"
              >
                Upcoming Films
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-10 h-1 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-[#D4AF37]' : 'bg-white/10 hover:bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {featured.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-left ${
                    i === current
                      ? 'bg-white/[0.08] border border-[#D4AF37]/20'
                      : 'bg-white/[0.02] border border-transparent hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="w-16 h-10 rounded-lg overflow-hidden shrink-0">
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-semibold truncate ${i === current ? 'text-[#D4AF37]' : 'text-white/60'}`}>
                      {f.title}
                    </h4>
                    <p className="text-[10px] text-white/30">{f.year} · {f.genre.split('•')[0].trim()}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
