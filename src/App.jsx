import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ResumeSection from './components/ResumeSection'
import ExtraCurricularSection from './components/ExtraCurricularSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CursorFollower from './components/CursorFollower'

export default function App() {
  return (
    <ThemeProvider>
      <CursorFollower />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ExtraCurricularSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}