import MyDetailsInterface from '../../assets/data/myDetailsInterface';

function Hero({ myData }: { myData: MyDetailsInterface }) {
  return (
    <main id='hero' className='section__hero'>
      <h1 className='hero__primaryText'>
        hey, i'm <span className='textBold'>daniel kim.</span> i'm a software
        engineer building creative digital solutions.
      </h1>
      <p className='hero__positionDesc'>
        <span>{myData.position}</span> @ {myData.company}
      </p>
      <section className='container__socials--hero'>
        <a href={myData.linkedIn} title='LinkedIn' target='_blank'>
          <i className='icon__socials fa-brands fa-linkedin'></i>
        </a>
        <a href={myData.github} title='GitHub' target='_blank'>
          <i className='icon__socials fa-brands fa-square-github'></i>
        </a>
        <a href={myData.twitter} title='Twitter' target='_blank'>
          <i className='icon__socials fa-brands fa-square-twitter'></i>
        </a>
      </section>
    </main>
  );
}

export default Hero;