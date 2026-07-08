import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, MapPin } from 'lucide-react';
import { upcomingFilms } from '../data/films';

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6">
      {[
        { val: time.days, label: 'Days' },
        { val: time.hours, label: 'Hours' },
        { val: time.minutes, label: 'Min' },
        { val: time.seconds, label: 'Sec' },
      ].map((t) => (
        <div key={t.label} className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/[0.08] flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {String(t.val).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] text-white/40 uppercase tracking-wider mt-2 block">{t.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function UpcomingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const film = upcomingFilms[0];

  return (
    <section id="upcoming" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover opacity-15 blur-sm scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
      </div>

      <div ref={ref} className="relative site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-[#C1121F] text-xs tracking-[0.3em] uppercase font-medium inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C1121F] rounded-full animate-pulse" />
            Coming Soon
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Upcoming Release
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative aspect-[2/3] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors duration-500" />
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-[#C1121F] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                {film.status === 'post-production' ? 'Post-Production' : 'Coming Soon'}
              </div>
            </div>

            <div className="absolute -inset-4 bg-[radial-gradient(ellipse,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col"
          >
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-gold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {film.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {film.genre.map(g => (
                <span key={g} className="px-3 py-1 text-xs font-medium bg-white/[0.06] border border-white/[0.08] rounded-full text-white/70">
                  {g}
                </span>
              ))}
            </div>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">{film.synopsis}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <div className="text-xs text-white/40">Release Year</div>
                  <div className="text-sm font-semibold text-white">{film.year}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <Users className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <div className="text-xs text-white/40">Director</div>
                  <div className="text-sm font-semibold text-white">{film.director}</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs text-white/40 uppercase tracking-wider mb-3">Starring</h4>
              <div className="flex flex-wrap gap-2">
                {film.cast.map(actor => (
                  <span key={actor} className="px-3 py-1.5 text-xs bg-white/[0.06] rounded-lg text-white/80 border border-white/[0.06]">
                    {actor}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs text-white/40 uppercase tracking-wider mb-4">Releasing In</h4>
              <CountdownTimer targetDate={new Date('2026-12-25')} />
            </div>

            {film.streamingPlatform && (
              <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] rounded-xl border border-white/[0.06] w-fit">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs text-white/50">Streaming on</span>
                <span className="text-sm font-semibold text-white">{film.streamingPlatform}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
