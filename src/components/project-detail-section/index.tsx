/* eslint-disable react/jsx-no-target-blank */
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Skill from '../skill-pill';
import Feature from './components/project-features';
import { useDetailsContext } from '../../contexts/detailsContext';

function ProjectDetail() {
  const { pathname } = useLocation();
  const { projectDetails } = useDetailsContext();

  const projectDetail = useMemo(() => {
    const name = pathname.split('/').slice(-1).toString();
    return projectDetails.filter((project) => project.projectName === name)[0];
  }, [pathname]);

  return (
    <>
      <section className="section__projects top">
        <h1 className="projectName">{projectDetail.projectName}</h1>
        <Link
          className="btn__link"
          to="/#projects"
          aria-label="Navigate back to landing page"
          relative="path"
        >
          <i className="btn__project btn__project--secondary ph-house" />
        </Link>
      </section>

      <section className="section__projects details">
        <section className="project">
          <section className="project__display--left">
            <h2 className="projectSubHeader">About</h2>
            <p className="projectDesc">{projectDetail.projectDescExtra}</p>
            <h2 className="projectSubHeader">Notable Features</h2>
            <ul className="projectFeatures">
              <Feature features={projectDetail.projectFeatures} />
            </ul>
            <section className="container__btn details">
              <a
                className="btn__link"
                aria-label="Navigate to Github repository"
                href={projectDetail.githubLink.href}
                target="_blank"
              >
                <i className="btn__project btn__project--primary fa-brands fa-github" />
              </a>
              <a
                className="btn__link"
                aria-label="Navigate to live site"
                href={projectDetail.liveLink.href}
                target="_blank"
              >
                <i className="btn__project btn__project--secondary ph-arrow-right" />
              </a>
            </section>
          </section>
          <section className="project__display--right">
            <a
              href={projectDetail.liveLink.href}
              aria-label="Navigate to live site"
              target="_blank"
            >
              <img
                className="projectImg"
                src={projectDetail.projectImg}
                alt={`${projectDetail.projectName} App screenshot`}
                loading="lazy"
              />
            </a>
            <h3 className="projectSubHeader">Technologies Used</h3>
            <section className="container__skills">
              <Skill tools={projectDetail.projectToolsExtra} />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default ProjectDetail;
