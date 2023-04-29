// Styling
import './styles/app.css';
import './styles/normalize.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

import projectData from './assets/data/project-details';
import myData from './assets/data/my-details';

// Components
import BackgroundImg from './components/background-img';
import Header from './components/header-section';
import Hero from './components/hero-section';
import About from './components/about-section';
import Projects from './components/projects-section';
import Footer from './components/footer-section';
import ProjectDetail from './components/project-detail-section';

function App() {
  return (
    <Router>
      <div className='App'>
        <ScrollToTop />
        <BackgroundImg />
        <Header />

        <Routes>
          {/* Landing page sections */}
          <Route
            path='*'
            element={
              <>
                <Hero {...myData} />
                <About {...myData} />
                <Projects projectData={projectData} />
              </>
            }
          />
          {/* Project Detail page */}
          <Route
            path='/project/:projectName'
            element={
              <>
                <ProjectDetail projectData={projectData} />
              </>
            }
          />
        </Routes>

        <Footer {...myData} />
      </div>
    </Router>
  );
}

export default App;
