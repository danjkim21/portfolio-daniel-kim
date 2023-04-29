import Skill from './Skill';
import { Link } from 'react-router-dom';
// import ProjectDetail from './ProjectDetail';

function Project(props) {
  return (
    <section className='container__project'>
      <Link></Link>
      <section className='project'>
        <section className='project__display--left'>
          <h2 className='projectName'>{props.projectName}</h2>
          <p className='projectDesc'>{props.projectDesc}</p>
          <section className='container__skills'>
            <Skill tools={props.projectTools} />
          </section>
          <section className='container__btn'>
            {/* <a
                className="btn__link"
                href={props.githubLink}
                target="_blank"
              >
                <i className="btn__project btn__project--primary fa-brands fa-github"></i>
              </a> */}
            <Link className='btn__link' to={`project/${props.projectName}`}>
              <i className='btn__project btn__project--secondary ph-arrow-right'></i>
            </Link>
            {/* <a
              className="btn__link"
              href={props.liveLink}
              target="_blank"
            >
              <i className="btn__project btn__project--secondary ph-arrow-right"></i>
            </a> */}
          </section>
        </section>
        <section className='project__display--right'>
          <a href={props.liveLink} target='_blank'>
            <img
              className='projectImg'
              src={props.projectImg}
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
