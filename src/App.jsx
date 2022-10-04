// Styling
import './App.css';
import './normalize.css';
// Components
import BackgroundImg from './components/BackgroundImg';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BackgroundImg />
      <Header />
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
      <Projects />
      <Footer
        email="dan.jkim21@gmail.com"
        linkedIn="https://www.linkedin.com/in/danieljayyoungkim/"
        twitter="https://twitter.com/devdanielk"
        github="https://github.com/danjkim21"
        location="Portland, ME, United States"
      />
    </div>
  );
}

export default App;
