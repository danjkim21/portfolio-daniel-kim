import { MyDetailsInterface } from '../../types/dataTypes';

export interface HeroProps {
	myData: MyDetailsInterface;
}

function Hero({ myData }: HeroProps) {
	return (
		<main id="hero" className="section__hero">
			<h1 className="hero__primaryText">
				hey, {`i'm`} <span className="textBold">daniel kim.</span> {`i'm`} a
				software engineer building creative digital solutions.
			</h1>
			<p className="hero__positionDesc">
				<span>{myData.position}</span> @ {myData.company}
			</p>
			<section className="container__socials--hero">
				<a
					href={myData.linkedIn}
					title="LinkedIn"
					aria-label="LinkedIn"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-linkedin" />
				</a>
				<a
					href={myData.github}
					title="GitHub"
					aria-label="Github"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-square-github" />
				</a>
				<a
					href={myData.twitter}
					title="Twitter"
					aria-label="Twitter"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-square-twitter" />
				</a>
			</section>
		</main>
	);
}

export default Hero;
