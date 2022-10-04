import '../App.css';
import Skill from './Skill';

function Project(props) {
  // console.log(props)
  return (
    <section className="container__project">
      {/* <a href="#"> */}
      <section className="project">
        <section className="project__display--left">
          <h2 className="projectName">{props.projectName}</h2>
          <p className="projectDesc">{props.projectDesc}</p>
          <section className="container__skills">
            <Skill tools={props.projectTools} />
          </section>
          <section className="container__btn">
            <a
              className="btn__link"
              href={props.githubLink}
              target="_blank"
            >
              <i className="btn__project btn__project--primary fa-brands fa-github"></i>
            </a>
            <a
              className="btn__link"
              href={props.liveLink}
              target="_blank"
            >
              <i className="btn__project btn__project--secondary ph-arrow-right"></i>
            </a>
          </section>
        </section>
        <section className="project__display--right">
          <a
            href={props.liveLink}
            target="_blank"
          >
            <img
              className="projectImg"
              src={props.projectImg}
              alt="project image"
              loading="lazy"
            />
          </a>
        </section>
      </section>
      {/* </a> */}
    </section>
  );
}

export default Project;
