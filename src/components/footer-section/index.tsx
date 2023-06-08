import MyDetailsInterface from '../../assets/data/myDetailsInterface';

function Footer({ myData }: { myData: MyDetailsInterface }) {
  // func - adds text to clipboard using navigator API
  let copyEmailToClipBoard = async () => {
    let emailAddress = 'dan.jkim21@gmail.com';
    navigator.clipboard.writeText(emailAddress).then(() => {
      alert(`Copied to clipboard: ${emailAddress}`);
    });
  };

  return (
    <footer id='footer' className='section__footer'>
      <h3 className='footer__title'>get in touch</h3>
      <a
        href='mailto:dan.jkim21@gmail.com'
        className='contact__email hover-underline-animation'
      >
        dan.jkim21@gmail.com
      </a>
      <span className='container__copyBtn' onClick={copyEmailToClipBoard}>
        <i className=' btn__copy fa-regular fa-copy'></i>
      </span>
      <section className='container__contact'>
        <p className='contact__desc'>
          Let's start a conversation! I am currently accepting new freelance
          clients, interesting job opportunities, and conversations on creating
          a clean and sustainable future.
        </p>
      </section>

      <section className='container__socials--footer'>
        <a href={myData.linkedIn} title='LinkedIn' target='_blank'>
          <i className='icon__socials fa-brands fa-linkedin'></i>
          <span className='icon__label'>linkedin</span>
        </a>

        <a href={myData.github} title='GitHub' target='_blank'>
          <i className='icon__socials fa-brands fa-square-github'></i>
          <span className='icon__label'>github</span>
        </a>

        <a href={myData.twitter} title='Twitter' target='_blank'>
          <i className='icon__socials fa-brands fa-square-twitter'></i>
          <span className='icon__label '>twitter</span>
        </a>

        <a title='Location'>
          <i className='icon__socials fa-solid fa-location-arrow'></i>
          <span className='icon__label '>{myData.location}</span>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
