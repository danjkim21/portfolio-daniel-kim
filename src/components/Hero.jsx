import '../App.css';

function Hero(props) {
  return (
    <main
      id="hero"
      className="section__hero"
    >
      <h1 className="hero__primaryText">
        hey, i'm <span className="textBold hover-underline-animation">daniel kim.</span> i'm a software engineer
        obsessed with dingling my dongus
      </h1>
      <p className="hero__positionDesc">
        <span>{props.position}</span> @ {props.company}
      </p>
      <section className="container__socials--hero">
        <a
          href={props.linkedIn}
          title="LinkedIn"
        >
          <i className="icon__socials fa-brands fa-linkedin"></i>
        </a>
        <a
          href={props.github}
          title="GitHub"
        >
          <i className="icon__socials fa-brands fa-square-github"></i>
        </a>
        <a
          href={props.twitter}
          title="Twitter"
        >
          <i className="icon__socials fa-brands fa-square-twitter"></i>
        </a>
      </section>
    </main>
  );
}

export default Hero;
