import outpostAppImg from '../../assets/outpost-img.jpeg';
import booklyAppImg from '../../assets/bookly-img.jpeg';
import ardbAppImg from '../../assets/arDB-screenshot.jpeg';
import cloneifyAppImg from '../../assets/cloneify-img.jpeg';

const projectData = [
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
    projectTools: ['React', 'Express', 'Node', 'Cheerio', 'Puppeteer'],
    projectToolsExtra: [
      'React',
      'Express',
      'JavaScript',
      'Node',
      'Cheerio',
      'Puppeteer',
      'Vite',
      'SPA',
    ],
  },
  {
    id: 4,
    projectName: 'Clone-ify: iPadOS',
    projectDesc:
      "I've always loved the visual design of the iPad operating system. This web app simulates the iPad OS from displaying widgets, to applications. The project integrates weather and music APIs, with many more features planned.",
    projectDescExtra:
      "I've always loved the visual design elements of the iPad operating system (OS). This project simulates the iPad OS, from displaying widgets, to functional applications (eg. safari, messenger, etc.). It is a work in progress and is constantly evolving as new features are planned and implemented.This was a fun personal project that was designed to showcase more of my front end development skills. It displays my ability to breakdown and reconstruct application features and layout components.",
    githubLink: 'https://github.com/danjkim21/clonify-ipadOS',
    liveLink: 'https://danjkim21.github.io/clonify-ipadOS/',
    projectImg: cloneifyAppImg,
    projectGif: '',
    projectFeatures: [
      'Weather widget fetching data from the OpenWeatherMaps API',
      'Top songs data fetched from the LastFM API',
      'Custom mouse cursor stylized to the iPad OS',
      'Custom CSS animations and transitions',
    ],
    projectTools: ['HTML', 'CSS', 'JavaScript'],
    projectToolsExtra: [
      'HTML',
      'CSS',
      'JavaScript',
      'Flexbox',
      'OpenWeatherMap API',
      'LastFM API',
    ],
  },
];

export default projectData;
