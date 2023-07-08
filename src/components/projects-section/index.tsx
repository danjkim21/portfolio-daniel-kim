import { ProjectDetailsInterface } from '../../types/dataTypes';
import Project from '../project-listing';

export interface ProjectsProps {
  projectData: ProjectDetailsInterface[];
}

function Projects({ projectData }: ProjectsProps) {
  const outpost = projectData.filter(
    (project) => project.projectName === 'Outpost'
  )[0];
  const bookly = projectData.filter(
    (project) => project.projectName === 'Bookly'
  )[0];
  const arDB = projectData.filter(
    (project) => project.projectName === 'arDB'
  )[0];

  return (
    <section id='projects' className='section__projects'>
      <Project projectData={arDB} />
      <Project projectData={outpost} />
      <Project projectData={bookly} />
    </section>
  );
}

export default Projects;
