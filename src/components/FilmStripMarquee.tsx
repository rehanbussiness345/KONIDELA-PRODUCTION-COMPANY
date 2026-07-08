import { motion } from 'framer-motion';

const filmNames = [
  "KHAIDI NO. 150",
  "SYE RAA NARASIMHA REDDY",
  "ACHARYA",
  "GODFATHER",
  "PEDDI",
  "RRR",
  "RANGASTHALAM",
  "MAGADHEERA",
  "GAME CHANGER",
];

export default function FilmStripMarquee() {
  const items = [...filmNames, ...filmNames, ...filmNames];

  return (
    <div className="relative py-8 overflow-hidden border-y border-white/[0.04]">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -2400] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }
        }}
      >
        {items.map((name, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/[0.04] hover:text-white/10 transition-colors duration-500 cursor-default"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}
            >
              {name}
            </span>
            <span className="text-[#D4AF37]/20 text-lg">✦</span>
          </div>
        ))}
      </motion.div>

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
    </div>
  );
}
