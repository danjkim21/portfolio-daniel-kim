import outpostAppImg from '../assets/outpost-img.jpeg';
import booklyAppImg from '../assets/bookly-img.jpeg';
import calmSpaceAppImg from '../assets/nasa-app-img.jpeg';
import cloneifyAppImg from '../assets/cloneify-img.jpeg';

const projectData = [
  {
    id: 1,
    projectName: 'Outpost',
    projectDesc:
      'A full stack web application that allows users to log in to their profile and find their planned trips. Users can create or edit trip plans, add destinations to each trip, plan activities, and save important notes, tickets, and accommodation information.',
    projectDescExtra:
      'A full stack web application that allows users to log in to their profile and find their planned trips. Users can create or edit trip plans, add destinations to each trip, plan activities, and save important notes, tickets, and accommodation information. This project highlights my ability to build a full stack application using MVC architecture. It demonstrates my understanding of how the client, server, and database all interact.',
    githubLink: 'https://github.com/danjkim21/outpost-app',
    liveLink: 'https://outpost-trips.herokuapp.com/',
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
    liveLink: 'https://bookly-crud-app.herokuapp.com/',
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
    projectName: 'Calm. Space',
    projectDesc:
      "A web app displaying pictures generated from NASA's astronomy API. Communicated through a simple yet elegant design, the project allows users to explore our universe through stunning photography, and informative descriptions.",
    projectDescExtra:
      "This project generates a new background image from NASA's popular Astronomy Picture of the Day (APOD) API, and provides a brief description of the image. The goal was to make a simple yet elegent web applicationthat provides a smooth user interface and maybe even calming experience. This project was designed to showcase more of my front end development skills. It displays my ability to fetch and parse through a complex API and return a clean and elegant UX/UI.",
    githubLink: 'https://github.com/danjkim21/space-image-generator',
    liveLink: 'https://danjkim21.github.io/space-image-generator/',
    projectImg: calmSpaceAppImg,
    projectGif: '',
    projectFeatures: [
      'Unique animations and transitions using css styling techniques such as :before, :after, and @keyframes',
      'Integration of NASA APOD API to generate high quality space images',
    ],
    projectTools: ['HTML', 'CSS', 'JavaScript'],
    projectToolsExtra: [
      'HTML',
      'CSS',
      'JavaScript',
      'Flexbox',
      'NASA APOD API',
      '@media',
      '@keyframes',
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
