// Styling
import './App.css';
import './normalize.css';

import projectData from './assets/data/project-details';
import myData from './assets/data/my-details';

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
                <Hero {...myData} />
                <About {...myData} />
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

        <Footer {...myData} />
      </div>
    </Router>
  );
}

export default App;
