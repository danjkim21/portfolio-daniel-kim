import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';

// Components
import BackgroundImg from '../components/background-img';
import Header from '../components/header-section';
import Hero from '../components/hero-section';
import About from '../components/about-section';
import Projects from '../components/projects-section';
import Footer from '../components/footer-section';
import ProjectDetail from '../components/project-detail-section';

export default function ProjectRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <BackgroundImg />
      <Header />

      <main id="main">
        <Routes>
          {/* Landing page sections */}
          <Route
            path="*"
            element={
              <>
                <Hero />
                <About />
                <Projects />
              </>
            }
          />
          {/* Project Detail page */}
          <Route path="/project/:projectName" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
