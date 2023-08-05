import backgroundImage from '../../assets/images/gradient-background copy.svg';

function BackgroundImg() {
  return (
    <>
      <img
        className='image__backgroundCover'
        src={backgroundImage}
        alt='Background image of staggered gradient shapes'
      />
    </>
  );
}

export default BackgroundImg;
