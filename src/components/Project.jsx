import '../App.css';
import Skill from './Skill'

function Project(props) {
  // console.log(props)
  return (
    <section className="container__project">
      <a href="#">
        <section className="project">
          <section className="project__display--left">
            <h2 className="projectName">{props.projectName}</h2>
            <p className="projectDesc">{props.projectDesc}</p>
            <section className="container__skills">
              <Skill tools={props.projectTools}/>
            </section>
            <section className="container__btn">
              <i className="btn__project ph-arrow-right"></i>
            </section>
          </section>
          <section className="project__display--right">
            <img
              className="projectImg"
              src={props.projectImg}
              alt="project image"
              loading="lazy"
            />
          </section>
        </section>
      </a>
    </section>
  );
}

export default Project;
