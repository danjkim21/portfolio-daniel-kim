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
        githubLink="https://github.com/danjkim21/outpost-app"
        liveLink="https://outpost-trips.herokuapp.com/"
        projectImg={outpostAppImg}
        projectTools={['MongoDB', 'Express', 'Node', 'EJS']}
      />
      <Project
        projectName="Bookly"
        projectDesc="A full stack web application that allows users to explore popular books, and save them to their reading playlist. Users can use a number of features to read book descriptions, mark books as completed, and more."
        githubLink="https://github.com/danjkim21/bookly-app"
        liveLink="https://bookly-crud-app.herokuapp.com/"
        projectImg={booklyAppImg}
        projectTools={['MongoDB', 'Express', 'Node', 'EJS']}
      />
      <Project
        projectName="Calm. Space"
        projectDesc="A web app displaying pictures generated from NASA's astronomy API. Communicated through a simple yet elegant design, the project allows users to explore our universe through stunning photography, and informative descriptions."
        githubLink="https://github.com/danjkim21/space-image-generator"
        liveLink="https://danjkim21.github.io/space-image-generator/"
        projectImg={calmSpaceAppImg}
        projectTools={['HTML', 'CSS', 'JavaScript']}
      />
      <Project
        projectName="Clone-ify: iPadOS"
        projectDesc="I've always loved the visual design of the iPad operating system. This web app simulates the iPad OS from displaying widgets, to applications. The project integrates weather and music APIs, with many more features planned."
        githubLink="https://github.com/danjkim21/clonify-ipadOS"
        liveLink="https://danjkim21.github.io/clonify-ipadOS/"
        projectImg={cloneifyAppImg}
        projectTools={['HTML', 'CSS', 'JavaScript']}
      />
    </section>
  );
}

export default Projects;
