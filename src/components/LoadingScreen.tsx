import { motion, AnimatePresence } from 'framer-motion';
import { Film } from 'lucide-react';

export default function LoadingScreen({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#0B0B0B] flex flex-col items-center justify-center"
        >
          <motion.div
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute top-0 left-0 right-0 h-[15%] bg-[#050505]"
          />
          <motion.div
            exit={{ y: '100%' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 h-[15%] bg-[#050505]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center mb-6 shadow-[0_0_60px_rgba(212,175,55,0.3)]"
            >
              <Film className="w-8 h-8 text-black" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold tracking-[0.3em] text-gradient-gold mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              KONIDELA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] tracking-[0.5em] text-white/30 uppercase"
            >
              Production Company
            </motion.p>

            <motion.div className="mt-8 w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
