import '../App.css';
import Project from './Project';
import outpostAppImg from '../assets/outpost-img.jpeg';
import booklyAppImg from '../assets/bookly-img.jpeg';
import calmSpaceAppImg from '../assets/nasa-app-img.jpeg';
import cloneifyAppImg from '../assets/cloneify-img.jpeg';

function Projects() {
  return (
    <section
      id="projects"
      className="section__projects"
    >
      <Project
        projectName="Outpost"
        projectDesc="A full stack web application that allows users to log in to their profile and find their planned trips. Users can create or edit trip plans, add destinations to each trip, plan activities, and save important notes, tickets, and accommodation information. "
        projectImg={outpostAppImg}
        projectTools={['MongoDB', 'Express', 'Node', 'EJS']}
      />
      <Project
        projectName="Bookly"
        projectDesc="A full stack web application allows users to explore popular books, and save them to their reading playlist. Users can use a number of features to read book descriptions, mark books as completed, and more."
        projectImg={booklyAppImg}
        projectTools={['MongoDB', 'Express', 'Node', 'EJS']}
      />
      <Project
        projectName="Calm. Space"
        projectDesc="A web app displays pictures generated from NASA's astronomy API. Communicated through a simple yet elegant design, the project allows users to explore our universe through stunning photography, and informative descriptions."
        projectImg={calmSpaceAppImg}
        projectTools={['HTML', 'CSS', 'JavaScript']}
      />
      <Project
        projectName="Clone-ify: iPadOS"
        projectDesc="I've always loved the visual design of the iPad operating system. This web app simulates the iPad OS from displaying widgets, to applications. The project integrates weather and music APIs, with many more features planned."
        projectImg={cloneifyAppImg}
        projectTools={['HTML', 'CSS', 'JavaScript']}
      />
    </section>
  );
}

export default Projects;
