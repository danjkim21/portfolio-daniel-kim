import Skill from '../skill-pill';
import Feature from '../project-features';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { ProjectDetailsInterface } from '../../types/dataTypes';

export interface ProjectDetailsProps {
  projectData: ProjectDetailsInterface[];
}

function ProjectDetail({ projectData }: ProjectDetailsProps) {
  const { pathname } = useLocation();

  const projectDetail = useMemo(() => {
    const name = pathname.split('/').slice(-1).toString();
    const projectDetail = projectData.filter(
      (project) => project.projectName === name
    )[0];

    return projectDetail;
  }, [pathname]);

  return (
    <>
      <section className='section__projects top'>
        <h2 className='projectName'>{projectDetail.projectName}</h2>
      </section>

      <section className='section__projects details'>
        <section className='project'>
          <section className='project__display--left'>
            <h3 className='projectSubHeader'>About</h3>
            <p className='projectDesc'>{projectDetail.projectDescExtra}</p>
            <h3 className='projectSubHeader'>Notable Features</h3>
            <ul className='projectFeatures'>
              <Feature features={projectDetail.projectFeatures} />
            </ul>
            <section className='container__btn details'>
              <a
                className='btn__link'
                href={projectDetail.githubLink}
                target='_blank'
              >
                <i className='btn__project btn__project--primary fa-brands fa-github'></i>
              </a>
              <a
                className='btn__link'
                href={projectDetail.liveLink}
                target='_blank'
              >
                <i className='btn__project btn__project--secondary ph-arrow-right'></i>
              </a>
            </section>
          </section>
          <section className='project__display--right'>
            <a href={projectDetail.liveLink} target='_blank'>
              <img
                className='projectImg'
                src={projectDetail.projectImg}
                alt='project image'
                loading='lazy'
              />
            </a>
            <h3 className='projectSubHeader'>Technologies Used</h3>
            <section className='container__skills'>
              <Skill tools={projectDetail.projectToolsExtra} />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default ProjectDetail;
