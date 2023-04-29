import Skill from '../skill-pill';
import Feature from '../project-features';
import { useLocation } from 'react-router-dom';

function ProjectDetail({ projectData }) {
  const { pathname } = useLocation();

  const outpost = projectData.filter(
    (project) => project.projectName === 'Outpost'
  )[0];
  const bookly = projectData.filter(
    (project) => project.projectName === 'Bookly'
  )[0];
  const arDB = projectData.filter(
    (project) => project.projectName === 'arDB'
  )[0];
  const cloneify = projectData.filter(
    (project) => project.projectName === 'Clone-ify: iPadOS'
  )[0];

  return (
    <>
      {pathname === `/project/${outpost.projectName}` && (
        <>
          <section className='section__projects top'>
            <h2 className='projectName'>{outpost.projectName}</h2>
          </section>

          <section className='section__projects details'>
            <section className='project'>
              <section className='project__display--left'>
                <h3 className='projectSubHeader'>About</h3>
                <p className='projectDesc'>{outpost.projectDescExtra}</p>
                <h3 className='projectSubHeader'>Notable Features</h3>
                <ul className='projectFeatures'>
                  <Feature features={outpost.projectFeatures} />
                </ul>
                <section className='container__btn details'>
                  <a
                    className='btn__link'
                    href={outpost.githubLink}
                    target='_blank'
                  >
                    <i className='btn__project btn__project--primary fa-brands fa-github'></i>
                  </a>
                  <a
                    className='btn__link'
                    href={outpost.liveLink}
                    target='_blank'
                  >
                    <i className='btn__project btn__project--secondary ph-arrow-right'></i>
                  </a>
                </section>
              </section>
              <section className='project__display--right'>
                <a href={outpost.liveLink} target='_blank'>
                  <img
                    className='projectImg'
                    src={outpost.projectImg}
                    alt='project image'
                    loading='lazy'
                  />
                </a>
                <h3 className='projectSubHeader'>Technologies Used</h3>
                <section className='container__skills'>
                  <Skill tools={outpost.projectToolsExtra} />
                </section>
              </section>
            </section>
          </section>
        </>
      )}
      {pathname === `/project/${bookly.projectName}` && (
        <>
          <section className='section__projects top'>
            <h1>{bookly.projectName}</h1>
          </section>
          <section className='section__projects details'>
            <section className='project'>
              <section className='project__display--left'>
                <h3 className='projectSubHeader'>About</h3>
                <p className='projectDesc'>{bookly.projectDescExtra}</p>
                <h3 className='projectSubHeader'>Notable Features</h3>
                <ul className='projectFeatures'>
                  <Feature features={bookly.projectFeatures} />
                </ul>
                <section className='container__btn details'>
                  <a
                    className='btn__link'
                    href={bookly.githubLink}
                    target='_blank'
                  >
                    <i className='btn__project btn__project--primary fa-brands fa-github'></i>
                  </a>
                  <a
                    className='btn__link'
                    href={bookly.liveLink}
                    target='_blank'
                  >
                    <i className='btn__project btn__project--secondary ph-arrow-right'></i>
                  </a>
                </section>
              </section>
              <section className='project__display--right'>
                <a href={bookly.liveLink} target='_blank'>
                  <img
                    className='projectImg'
                    src={bookly.projectImg}
                    alt='project image'
                    loading='lazy'
                  />
                </a>
                <h3 className='projectSubHeader'>Technologies Used</h3>
                <section className='container__skills'>
                  <Skill tools={bookly.projectToolsExtra} />
                </section>
              </section>
            </section>
          </section>
        </>
      )}
      {pathname === `/project/${arDB.projectName}` && (
        <>
          <section className='section__projects top'>
            <h1>{arDB.projectName}</h1>
          </section>
          <section className='section__projects details'>
            <section className='project'>
              <section className='project__display--left'>
                <h3 className='projectSubHeader'>About</h3>
                <p className='projectDesc'>{arDB.projectDescExtra}</p>
                <h3 className='projectSubHeader'>Notable Features</h3>
                <ul className='projectFeatures'>
                  <Feature features={arDB.projectFeatures} />
                </ul>
                <section className='container__btn details'>
                  <a
                    className='btn__link'
                    href={arDB.githubLink}
                    target='_blank'
                  >
                    <i className='btn__project btn__project--primary fa-brands fa-github'></i>
                  </a>
                  <a className='btn__link' href={arDB.liveLink} target='_blank'>
                    <i className='btn__project btn__project--secondary ph-arrow-right'></i>
                  </a>
                </section>
              </section>
              <section className='project__display--right'>
                <a href={arDB.liveLink} target='_blank'>
                  <img
                    className='projectImg'
                    src={arDB.projectImg}
                    alt='project image'
                    loading='lazy'
                  />
                </a>
                <h3 className='projectSubHeader'>Technologies Used</h3>
                <section className='container__skills'>
                  <Skill tools={arDB.projectToolsExtra} />
                </section>
              </section>
            </section>
          </section>
        </>
      )}
      {pathname === `/project/${cloneify.projectName}` && (
        <>
          <section className='section__projects top'>
            <h1>{cloneify.projectName}</h1>
          </section>
          <section className='section__projects details'>
            <section className='project'>
              <section className='project__display--left'>
                <h3 className='projectSubHeader'>About</h3>
                <p className='projectDesc'>{cloneify.projectDescExtra}</p>
                <h3 className='projectSubHeader'>Notable Features</h3>
                <ul className='projectFeatures'>
                  <Feature features={cloneify.projectFeatures} />
                </ul>
                <section className='container__btn details'>
                  <a
                    className='btn__link'
                    href={cloneify.githubLink}
                    target='_blank'
                  >
                    <i className='btn__project btn__project--primary fa-brands fa-github'></i>
                  </a>
                  <a
                    className='btn__link'
                    href={cloneify.liveLink}
                    target='_blank'
                  >
                    <i className='btn__project btn__project--secondary ph-arrow-right'></i>
                  </a>
                </section>
              </section>
              <section className='project__display--right'>
                <a href={cloneify.liveLink} target='_blank'>
                  <img
                    className='projectImg'
                    src={cloneify.projectImg}
                    alt='project image'
                    loading='lazy'
                  />
                </a>
                <h3 className='projectSubHeader'>Technologies Used</h3>
                <section className='container__skills'>
                  <Skill tools={cloneify.projectToolsExtra} />
                </section>
              </section>
            </section>
          </section>
        </>
      )}
    </>
  );
}

export default ProjectDetail;
