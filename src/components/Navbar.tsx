import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Film } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Films', href: '#films' },
  { label: 'Upcoming', href: '#upcoming' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Awards', href: '#awards' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export { InstagramIcon, YoutubeIcon, TwitterIcon };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="site-container flex items-center justify-between h-20 lg:h-24">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Film className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-wider text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                KONIDELA
              </span>
              <span className="text-[9px] lg:text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase -mt-1">
                Production Company
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a href="https://www.instagram.com/konidelapro/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-[#D4AF37] transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@KonidelaProCompany" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/50 hover:text-[#D4AF37] transition-colors">
              <YoutubeIcon />
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black text-sm font-semibold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Collaborate
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/80 hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#0B0B0B]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl tracking-[0.2em] text-white/80 hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex gap-6 mt-6">
              <a href="https://www.instagram.com/konidelapro/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-[#D4AF37] transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@KonidelaProCompany" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/50 hover:text-[#D4AF37] transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/KonidelaPro" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/50 hover:text-[#D4AF37] transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
