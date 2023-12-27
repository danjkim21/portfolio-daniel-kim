import { useDetailsContext } from '../../contexts/detailsContext';

function Hero() {
	const { myDetails } = useDetailsContext();

	return (
		<section id="hero" className="section__hero">
			<h1 className="hero__primaryText">
				hey, {`i'm`} <span className="textBold">daniel kim.</span> {`i'm`} a
				software engineer building creative digital solutions.
			</h1>
			<p className="hero__positionDesc">
				<span>{myDetails.position}</span> @ {myDetails.company}
			</p>
			<section className="container__socials--hero">
				<a
					href={myDetails.linkedIn.href}
					title="LinkedIn"
					aria-label="LinkedIn"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-linkedin" />
				</a>
				<a
					href={myDetails.github.href}
					title="GitHub"
					aria-label="Github"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-square-github" />
				</a>
				<a
					href={myDetails.twitter.href}
					title="Twitter"
					aria-label="Twitter"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-square-twitter" />
				</a>
			</section>
		</section>
	);
}

export default Hero;
