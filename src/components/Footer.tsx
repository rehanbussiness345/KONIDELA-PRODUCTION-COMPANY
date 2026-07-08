import { Film } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterIcon } from './Navbar';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-20 lg:pt-24 pb-8">
      <div className="site-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center">
                <Film className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  KONIDELA
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase -mt-1">
                  Production Company
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Crafting epic cinematic experiences from Hyderabad. Founded by Ram Charan, home of Megastar Chiranjeevi's blockbusters.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/konidelapro/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 transition-all duration-300">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@KonidelaProCompany" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 transition-all duration-300">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/KonidelaPro" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 transition-all duration-300">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wider uppercase">Navigate</h4>
            <ul className="space-y-3">
              {['Home', 'Films', 'Upcoming', 'About', 'Awards', 'News', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-white/40 hover:text-[#D4AF37] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wider uppercase">Productions</h4>
            <ul className="space-y-3">
              {['Khaidi No. 150', 'Sye Raa Narasimha Reddy', 'Acharya', 'Godfather', 'Peddi (Upcoming)'].map(film => (
                <li key={film}>
                  <a href="#films" className="text-sm text-white/40 hover:text-[#D4AF37] transition-colors duration-300">
                    {film}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wider uppercase">Contact</h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>Jubilee Hills, Hyderabad</p>
              <p>Telangana 500033, India</p>
              <a href="#contact" className="block hover:text-[#D4AF37] transition-colors">info@konidelapro.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04] mt-16">
        <div className="site-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Konidela Production Company. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Hyderabad, India • Tollywood
          </p>
        </div>
      </div>
    </footer>
  );
}
