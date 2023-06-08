import Skill from '../skill-pill';
import { Link } from 'react-router-dom';
import ProjectDetailsInterface from '../../assets/data/projectDetailsInterface';

function Project({ projectData }: { projectData: ProjectDetailsInterface }) {
  return (
    <section className='container__project'>
      <section className='project'>
        <section className='project__display--left'>
          <h2 className='projectName'>{projectData.projectName}</h2>
          <p className='projectDesc'>{projectData.projectDesc}</p>
          <section className='container__skills'>
            <Skill tools={projectData.projectTools} />
          </section>
          <section className='container__btn'>
            <Link
              className='btn__link'
              to={`project/${projectData.projectName}`}
            >
              <i className='btn__project btn__project--secondary ph-arrow-right'></i>
            </Link>
          </section>
        </section>
        <section className='project__display--right'>
          <a href={projectData.liveLink} target='_blank'>
            <img
              className='projectImg'
              src={projectData.projectImg}
              alt='project image'
              loading='lazy'
            />
          </a>
        </section>
      </section>
    </section>
  );
}

export default Project;
