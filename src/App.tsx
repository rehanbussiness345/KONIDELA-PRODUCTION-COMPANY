import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilmStripMarquee from './components/FilmStripMarquee';
import FeaturedShowcase from './components/FeaturedShowcase';
import FilmsSection from './components/FilmsSection';
import UpcomingSection from './components/UpcomingSection';
import BehindTheScenes from './components/BehindTheScenes';
import CinematicQuote from './components/CinematicQuote';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ProductionServices from './components/ProductionServices';
import FilmCollections from './components/FilmCollections';
import AwardsSection from './components/AwardsSection';
import NewsSection from './components/NewsSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <CursorGlow />
      <div className="film-grain" />

      {!loading && (
        <div className="relative">
          <Navbar />

          <main>
            <Hero />
            <FilmStripMarquee />
            <FeaturedShowcase />

            <div className="section-divider" />

            <FilmCollections />

            <div className="section-divider" />

            <FilmsSection />

            <div className="section-divider" />

            <UpcomingSection />

            <div className="section-divider" />

            <CinematicQuote />

            <div className="section-divider" />

            <BehindTheScenes />

            <div className="section-divider" />

            <AboutSection />

            <div className="section-divider" />

            <TeamSection />

            <div className="section-divider" />

            <ProductionServices />

            <div className="section-divider" />

            <AwardsSection />

            <div className="section-divider" />

            <NewsSection />

            <div className="section-divider" />

            <InstagramSection />

            <div className="section-divider" />

            <ContactSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
