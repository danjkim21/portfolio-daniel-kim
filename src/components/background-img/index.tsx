import backgroundImage from '../../assets/images/gradient-background copy.svg';

function backgroundImg() {
  return (
    <>
      <img
        className='image__backgroundCover'
        src={backgroundImage as string}
        alt='Background staggered gradient shapes image'
      />
    </>
  );
}

export default backgroundImg;
