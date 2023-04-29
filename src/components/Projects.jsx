import Project from './Project';

function Projects({ projectData }) {
  const outpost = projectData.filter(
    (project) => project.projectName === 'Outpost'
  )[0];
  const bookly = projectData.filter(
    (project) => project.projectName === 'Bookly'
  )[0];
  const arDB = projectData.filter(
    (project) => project.projectName === 'arDB'
  )[0];
  const cloneify = projectData.filter(
    (project) => project.projectName === 'Clone-ify: iPadOS'
  )[0];

  return (
    <section id='projects' className='section__projects'>
      <Project {...outpost} />
      <Project {...bookly} />
      <Project {...arDB} />
      <Project {...cloneify} />
    </section>
  );
}

export default Projects;
