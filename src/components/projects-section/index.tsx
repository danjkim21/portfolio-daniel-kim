import { ProjectDetailsInterface } from '../../types/dataTypes';
import ProjectListing from '../project-listing';

export interface ProjectsProps {
	projectData: ProjectDetailsInterface[];
}

function Projects({ projectData }: ProjectsProps) {
	return (
		<section id="projects" className="section__projects">
			{projectData.map((project) => {
				return <ProjectListing key={project.id} projectData={project} />;
			})}
		</section>
	);
}

export default Projects;
