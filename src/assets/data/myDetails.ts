import { MyDetailsInterface } from '../../types/dataTypes';

const myDetails: MyDetailsInterface = {
	linkedIn: new URL('https://www.linkedin.com/in/danieljayyoungkim/'),
	twitter: new URL('https://twitter.com/devdanielk'),
	github: new URL('https://github.com/danjkim21'),
	position: 'software engineer',
	location: 'Philadelphia, PA, United States',
	company: 'Skyward IT Solutions',
	companyLink: new URL('https://skywarditsolutions.com/'),
	skills: [
		'JavaScript (ES6+)',
		'TypeScript',
		'HTML',
		'CSS',
		'React',
		'Redux',
		'Node',
		'Express',
		'MongoDB',
	],
};

export default myDetails;
