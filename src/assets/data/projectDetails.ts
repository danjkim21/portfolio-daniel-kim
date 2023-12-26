import { ProjectDetailsInterface } from '../../types/dataTypes';

import outpostAppImg from '../images/outpost-img.jpeg';
import booklyAppImg from '../images/bookly-img.jpeg';
import ardbAppImg from '../images/arDB-screenshot.jpeg';
import cloneifyAppImg from '../images/cloneify-img.jpeg';

const projectDetails: ProjectDetailsInterface[] = [
	{
		id: 1,
		projectName: 'Outpost',
		projectDesc:
			'A full stack web application that allows users to log in to their profile and find their planned trips. Users can create or edit trip plans, add destinations to each trip, plan activities, and save important notes, tickets, and accommodation information.',
		projectDescExtra:
			'A full stack web application that allows users to log in to their profile and find their planned trips. Users can create or edit trip plans, add destinations to each trip, plan activities, and save important notes, tickets, and accommodation information. This project highlights my ability to build a full stack application using MVC architecture. It demonstrates my understanding of how the client, server, and database all interact.',
		githubLink: 'https://github.com/danjkim21/outpost-app',
		liveLink: 'https://outpost.cyclic.app/',
		projectImg: outpostAppImg,
		projectGif: '',
		projectFeatures: [
			'Create an account with Passport.JS and log in',
			'Create trips and add destinations that get saved to each user database',
			'Create and save notes, travel activities, and tickets',
			'Share trip plans with other users',
			'Explore trip plans created by other users',
		],
		projectTools: ['MongoDB', 'Express', 'Node', 'EJS', 'Passport'],
		projectToolsExtra: [
			'Mongoose',
			'MongoDB',
			'Express',
			'Node',
			'EJS',
			'Passport',
			'MVC',
			'CRUD',
			'REST API',
		],
	},
	{
		id: 2,
		projectName: 'Bookly',
		projectDesc:
			'A full stack web application that allows users to explore popular books, and save them to their reading playlist. Users can use a number of features to read book descriptions, mark books as completed, and more.',
		projectDescExtra:
			'This full stack CRUD web application allows users to explore popular books, and save them to their reading playlist. Users can use a number of features to read book descriptions, mark books as completed, and more. The goal of this project was to develop a novel and minimal user experience for tracking and finding new books. This project highlights my ability to build the client and server software of a modern web application, and implement CRUD operations.',
		githubLink: 'https://github.com/danjkim21/bookly-app',
		liveLink: 'https://bookly.cyclic.app/',
		projectImg: booklyAppImg,
		projectGif: '',
		projectFeatures: [
			'Explore popular New York Times Best Sellers lists using the NYTimes Books API',
			'Save and remove playlist books to MongoDB',
			'Favorite and rate books',
			'View all completed books and favorite books in different filtered views',
		],
		projectTools: ['MongoDB', 'Express', 'Node', 'EJS'],
		projectToolsExtra: [
			'MongoDB',
			'Express',
			'Node',
			'EJS',
			'CRUD',
			'REST API',
			'Google Books API',
			'NYTimes Books API',
		],
	},
	{
		id: 3,
		projectName: 'arDB',
		projectDesc:
			'A full stack web application that allows users to explore or call to a RESTful API containing scrapped data on advanced nuclear reactor technical specifications and information related to reactor dynamics, and electricity production.',
		projectDescExtra:
			'A web app that allows users to explore or call to a RESTful API containing scrapped data on advanced nuclear reactor technical specifications and information related to reactor dynamics, and electricity production. This project highlights my ability to build REST APIs and integrate them into React. It demonstrates my understanding of how the client, server, and database all interact in a single-page application (SPA).',
		githubLink: 'https://github.com/danjkim21/adv-nuclear-reactor-api-v2',
		liveLink: 'https://ardb.vercel.app/',
		projectImg: ardbAppImg,
		projectGif: '',
		projectFeatures: [
			'Explore technical data via front-end web app or RESTful API',
			'public data scraped using puppeteer.js and cheerio.js',
		],
		projectTools: [
			'React',
			'TypeScript',
			'Express',
			'Node',
			'Material UI',
			'Puppeteer',
		],
		projectToolsExtra: [
			'React',
			'Express',
			'JavaScript',
			'Node',
			'Material UI',
			'Cheerio',
			'Puppeteer',
			'Vite',
			'SPA',
		],
	},
];

export default projectDetails;
