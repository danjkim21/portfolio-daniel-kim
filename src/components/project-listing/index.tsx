import { Link } from 'react-router-dom';
import { ProjectDetailsInterface } from '../../types/dataTypes';
import Skill from '../skill-pill';

export interface ProjectProps {
  projectData: ProjectDetailsInterface;
}

function Project({ projectData }: ProjectProps) {
  return (
    <section className="container__project">
      <article className="project">
        <section className="project__display--left">
          <h2 className="projectName">{projectData.projectName}</h2>
          <p className="projectDesc">{projectData.projectDesc}</p>
          <section className="container__skills">
            <Skill tools={projectData.projectTools} />
          </section>
          <section className="container__btn">
            <Link
              className="btn__link"
              to={`project/${projectData.projectName}`}
              aria-label={`See ${projectData.projectName} details`}
              relative="path"
            >
              <i className="btn__project btn__project--secondary ph-arrow-right" />
            </Link>
          </section>
        </section>
        <section className="project__display--right">
          <Link
            className="btn__link"
            to={`project/${projectData.projectName}`}
            aria-label={`See ${projectData.projectName} details`}
            relative="path"
          >
            <img
              className="projectImg animate"
              src={projectData.projectImg}
              alt={`${projectData.projectName} App screenshot`}
              loading="lazy"
            />
          </Link>
        </section>
      </article>
    </section>
  );
}

export default Project;
