import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { teamMembers } from '../data/films';

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative section-padding">
      <div ref={ref} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">The People Behind The Magic</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Directors & Team
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 card-gap description-to-content">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Notable Collaborators
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'V.V. Vinayak', 'Surender Reddy', 'Koratala Siva', 'Mohan Raja',
              'S. Shankar', 'S.S. Rajamouli', 'Buchi Babu Sana', 'Sukumar',
              'M.M. Keeravani', 'A.R. Rahman', 'Devi Sri Prasad'
            ].map(name => (
              <span key={name} className="px-5 py-2.5 text-sm bg-white/[0.03] border border-white/[0.06] rounded-full text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 transition-all duration-300 cursor-default">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamCard({ member, index, inView }: { member: typeof import('../data/films').teamMembers[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15 + index * 0.12 }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-1">
            {member.role}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {member.name}
          </h3>

          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: hovered ? '200px' : '0', opacity: hovered ? 1 : 0 }}
          >
            <p className="text-white/60 text-xs leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
          style={{
            boxShadow: hovered
              ? 'inset 0 0 0 2px rgba(212,175,55,0.3), 0 20px 60px -10px rgba(0,0,0,0.5)'
              : 'inset 0 0 0 1px rgba(255,255,255,0.06)'
          }}
        />
      </div>
    </motion.div>
  );
}
