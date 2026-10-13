import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturedProjectsSection from './components/FeaturedProjectsSection'
import SkillsSection from './components/SkillsSection'
import LearningJourneySection from './components/LearningJourneySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-gradient" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <LearningJourneySection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
