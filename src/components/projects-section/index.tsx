import { useDetailsContext } from '../../contexts/detailsContext';
import ProjectListing from '../project-listing';

function Projects() {
  const { projectDetails } = useDetailsContext();

  return (
    <section id="projects" className="section__projects">
      {projectDetails.map((project) => {
        return <ProjectListing key={project.id} projectData={project} />;
      })}
    </section>
  );
}

export default Projects;
