import backgroundStyles from './index.module.scss';
import backgroundImage from '../../assets/images/gradient-background copy.svg';

function BackgroundImg() {
	return (
		<img
			className={backgroundStyles.image__backgroundCover}
			src={backgroundImage}
			alt="Background staggered gradient shapes"
		/>
	);
}

export default BackgroundImg;
