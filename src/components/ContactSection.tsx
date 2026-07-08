import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Send, Building2 } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterIcon } from './Navbar';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div ref={ref} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-to-description text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            Contact Us
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base description-to-content">
            For collaborations, business inquiries, or casting calls — reach out to our production office.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 description-to-content">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Production Office
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-[#D4AF37]/20 transition-colors duration-500">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Office Location</h4>
                  <p className="text-sm text-white/50">Jubilee Hills, Hyderabad, Telangana 500033, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-[#D4AF37]/20 transition-colors duration-500">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Production House</h4>
                  <p className="text-sm text-white/50">Konidela Production Company</p>
                  <p className="text-xs text-white/30 mt-1">Est. 2016 • Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-[#D4AF37]/20 transition-colors duration-500">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Email</h4>
                  <p className="text-sm text-white/50">info@konidelapro.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xs text-white/40 uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/konidelapro/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/10 transition-all duration-300">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@KonidelaProCompany" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/10 transition-all duration-300">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/KonidelaPro" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/10 transition-all duration-300">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-white/[0.06] aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4!3d17.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzQ4LjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konidela Production Company Office Location — Jubilee Hills, Hyderabad"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 lg:p-10 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send an Inquiry
              </h3>
              <p className="text-sm text-white/40 mb-8">
                Interested in collaboration, investments, or talent inquiries? Fill out the form below.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-sm text-white/50">Your inquiry has been submitted. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Subject</label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-[#D4AF37]/40 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#141414]">Select inquiry type</option>
                      <option value="collaboration" className="bg-[#141414]">Film Collaboration</option>
                      <option value="investment" className="bg-[#141414]">Investment Inquiry</option>
                      <option value="talent" className="bg-[#141414]">Talent / Casting</option>
                      <option value="press" className="bg-[#141414]">Press / Media</option>
                      <option value="general" className="bg-[#141414]">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      id="message"
                      required
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      rows={5}
                      className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/40 transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
