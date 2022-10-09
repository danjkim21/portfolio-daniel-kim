// Styling
import './App.css';
import './normalize.css';

import projectData from './assets/project-details';

// Components
import BackgroundImg from './components/BackgroundImg';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundImg />
        <Header />

        <Routes>
          {/* Landing page sections */}
          <Route
            path="*"
            element={
              <>
                <Hero
                  linkedIn="https://www.linkedin.com/in/danieljayyoungkim/"
                  twitter="https://twitter.com/devdanielk"
                  github="https://github.com/danjkim21"
                  position="software engineer"
                  company="100Devs"
                />
                <About
                  company="100Devs"
                  github="https://github.com/danjkim21"
                  companyLink="https://www.linkedin.com/company/100devs/"
                />
                <Projects projectData={projectData} />
              </>
            }
          />
          {/* Project Detail page */}
          <Route
            path="/project/:projectName"
            element={
              <>
                <ProjectDetail projectData={projectData} />
              </>
            }
          />
        </Routes>

        <Footer
          email="dan.jkim21@gmail.com"
          linkedIn="https://www.linkedin.com/in/danieljayyoungkim/"
          twitter="https://twitter.com/devdanielk"
          github="https://github.com/danjkim21"
          location="Portland, ME, United States"
        />
      </div>
    </Router>
  );
}

export default App;
