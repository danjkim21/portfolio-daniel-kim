import { useEffect, useState } from 'react';
import { MyDetailsInterface } from '../../types/dataTypes';
import AlertPopUp from '../alert-pop-up';

export interface FooterProps {
	myData: MyDetailsInterface;
}

function Footer({ myData }: FooterProps) {
	// State - controls copy to clipboard alert on success
	const [isAlertVisible, setIsAlertVisible] = useState(false);

	// func - adds text to clipboard using navigator API
	const copyEmailToClipBoard = async () => {
		const emailAddress = 'dan.jkim21@gmail.com';
		try {
			await navigator.clipboard.writeText(emailAddress);
			setIsAlertVisible(true);
		} catch (err) {
			console.error(err);
		}
	};

	// Helper func, closes alert popup after 4 seconds
	useEffect(() => {
		const timeId = setTimeout(() => {
			setIsAlertVisible(false);
		}, 4000);
		return () => {
			clearTimeout(timeId);
		};
	}, [isAlertVisible]);

	return (
		<footer id="footer" className="section__footer">
			<h3 className="footer__title">get in touch</h3>
			<a
				href="mailto:dan.jkim21@gmail.com"
				className="contact__email hover-underline-animation"
			>
				dan.jkim21@gmail.com
			</a>
			<span className="container__copyBtn">
				<i
					className=" btn__copy fa-regular fa-copy"
					onClick={copyEmailToClipBoard}
				/>
			</span>

			<section className="container__contact">
				<p className="contact__desc">
					{`Let's`} start a conversation! I am currently accepting new freelance
					clients, interesting job opportunities, and conversations on creating
					a clean and sustainable future.
				</p>
			</section>

			<section className="container__socials--footer">
				<a
					href={myData.linkedIn.href}
					title="LinkedIn"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-linkedin" />
					<span className="icon__label">linkedin</span>
				</a>

				<a
					href={myData.github.href}
					title="GitHub"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-square-github" />
					<span className="icon__label">github</span>
				</a>

				<a
					href={myData.twitter.href}
					title="Twitter"
					target="_blank"
					rel="noreferrer"
				>
					<i className="icon__socials fa-brands fa-square-twitter" />
					<span className="icon__label ">twitter</span>
				</a>

				<a title="Location">
					<i className="icon__socials fa-solid fa-location-arrow" />
					<span className="icon__label ">{myData.location}</span>
				</a>
			</section>
			{/* On successful copy to clipboard submission - display alert pop-up */}
			<AlertPopUp
				isAlertVisible={isAlertVisible}
				setIsAlertVisible={setIsAlertVisible}
			/>
		</footer>
	);
}

export default Footer;
