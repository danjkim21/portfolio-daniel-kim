import '../App.css';
import headshot from '../assets/fullheadshot.jpeg';
import Skill from './Skill';

function About(props) {
  return (
    <section
      id="about"
      className="section__about"
    >
      <section className="contentAbout__left">
        <p className="about__text">
          I specialize in developing <a
            className="pageLinks hover-underline-animation"
            href={props.github}
            target="_blank"
          > modern and responsive web products </a>, from websites to
          full stack web applications. My interest in sofware engineering stems from my
          background in policy analysis, building Tableau dashboards to uncover clean
          energy policy solutions. As it turns out, creating interactive data stories has
          a lot in common with web development!
        </p>
        <p className="about__text">
          Today, my main focus is building accessible, inclusive products and digital
          experiences at{' '}
          <a
            className="pageLinks hover-underline-animation"
            href={props.companyLink}
            target="_blank"
          >
            {props.company}
          </a>{' '}
          for a variety of clients.
        </p>
        <p className="about__text">
          When I'm not coding, I can be found hiding away in a remote cabin, reading a new
          sci-fi novel, and keeping up to date with the latest innovations in clean energy
          technologies.
        </p>
        <section className="container__skills">
          <Skill
            tools={[
              'JavaScript (ES6+)',
              'HTML',
              'CSS',
              'React',
              'Node',
              'Express',
              'MongoDB',
            ]}
          />
        </section>
      </section>

      <section className="contentAbout__right">
        <section className="wrapper">
          <img
            className="img__headshot"
            src={headshot}
            loading="lazy"
            alt="Daniel Kim headshot"
          />
        </section>
      </section>
    </section>
  );
}

export default About;
