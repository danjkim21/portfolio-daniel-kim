import headshot from '../../assets/images/fullheadshot.jpeg';
import Skill from '../skill-pill';
import MyDetailsInterface from '../../assets/data/myDetailsInterface';

function About({ myData }: { myData: MyDetailsInterface }) {
  return (
    <section id='about' className='section__about'>
      <section className='contentAbout__left'>
        <p className='about__text'>
          I specialize in developing{' '}
          <a
            className='pageLinks hover-underline-animation'
            href={myData.github}
            target='_blank'
          >
            {' '}
            modern and responsive web products{' '}
          </a>
          , from websites to full stack web applications. My interest in
          software engineering stems from my background in policy analysis,
          building Tableau dashboards to uncover clean energy policy solutions.
          As it turns out, creating interactive data stories has a lot in common
          with web development!
        </p>
        <p className='about__text'>
          Today, my main focus is building accessible, inclusive products and
          digital experiences at{' '}
          <a
            className='pageLinks hover-underline-animation'
            href={myData.companyLink}
            target='_blank'
          >
            {myData.company}
          </a>{' '}
          for a variety of clients.
        </p>
        <p className='about__text'>
          When I'm not coding, I can be found hiding away in a remote cabin,
          reading a new sci-fi novel, and keeping up to date with the latest
          innovations in clean energy technologies.
        </p>
        <section className='container__skills'>
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

      <section className='contentAbout__right'>
        <section className='wrapper'>
          <img
            className='img__headshot'
            src={headshot}
            loading='lazy'
            alt='Daniel Kim headshot'
          />
        </section>
      </section>
    </section>
  );
}

export default About;
