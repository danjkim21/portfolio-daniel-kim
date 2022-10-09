import '../App.css';
import Project from './Project';
import outpostAppImg from '../assets/outpost-img.jpeg';
import booklyAppImg from '../assets/bookly-img.jpeg';
import calmSpaceAppImg from '../assets/nasa-app-img.jpeg';
import cloneifyAppImg from '../assets/cloneify-img.jpeg';

function Projects({ projectData }) {
  // console.log(projectData);
  const outpost = projectData.filter((project) => project.projectName === 'Outpost')[0];
  const bookly = projectData.filter((project) => project.projectName === 'Bookly')[0];
  const calmSpace = projectData.filter(
    (project) => project.projectName === 'Calm. Space'
  )[0];
  const cloneify = projectData.filter(
    (project) => project.projectName === 'Clone-ify: iPadOS'
  )[0];

  return (
    <section
      id="projects"
      className="section__projects"
    >
      <Project {...outpost} />
      <Project {...bookly} />
      <Project {...calmSpace} />
      <Project {...cloneify} />
    </section>
  );
}

export default Projects;
