const ProjectsData = [
	{
		id: '1',
		name: "The Jedi's Trunk",
		description:
			'This is a website built for buying and selling Star Wars toys. It serves as a marketplace where Star Wars enthusiasts can explore a wide range of toys, connect with sellers, and make purchases.',
		technologies: [
			'React.js',
			'Tailwind CSS',
			'MongoDB',
			'Express',
			'Firebase',
		],
		features: [
			'Browse and search a diverse collection of Star Wars toys.',
			'Filter and sort toys based on categories, prices, and ratings.',
			'View detailed information, images, and pricing of each toy.',
			'Add toys to the marketplace.',
			'User authentication and secure login functionality.',
			'Seller profiles and contact information for direct communication.',
			'Integration with Firebase for real-time updates and database management.',
		],
		links: {
			live_site: 'https://the-jedis-trunk.web.app',
			client_code: 'https://github.com/safayetdib/the-jedis-trunk-client-side',
			server_code: 'https://github.com/safayetdib/the-jedis-trunk-server-side',
		},
		additionalDetails: `The project features a toy marketplace built with React, enabling users to seamlessly browse, add, update, and delete products. Navigation within the application is facilitated by React Router, while the Context API ensures efficient state management. The implementation of Firebase authentication ensures secure user registration and login. Furthermore, CRUD functionality for toy data is enabled through the utilization of Express.js and MongoDB, allowing for convenient management and interaction with the marketplace's inventory.`,
		banner_img: '/assets/the-jedis-trunk/fullscreen.png',
		screenshots: [
			'/assets/the-jedis-trunk/banner.png',
			'/assets/the-jedis-trunk/alltoys.png',
			'/assets/the-jedis-trunk/mytoys.png',
			'/assets/the-jedis-trunk/updatetoy.png',
			'/assets/the-jedis-trunk/deletetoy.png',
			'/assets/the-jedis-trunk/addtoy.png',
			'/assets/the-jedis-trunk/signin.png',
			'/assets/the-jedis-trunk/signup.png',
		],
	},
	{
		id: '2',
		name: 'Spicy Mexican Chefs',
		description:
			'This is a website about showcasing recipes from Mexican chefs. You can browse recipes by chef, and create an account to see chefs details and recipes, save your favorite recipes and chefs, and view ratings and likes from other users.',
		technologies: [
			'React JS',
			'React Router',
			'Tailwind CSS',
			'Firebase',
			'Express',
		],
		features: [
			'Browse recipes by chef',
			'Learn more about the chefs who created your favorite recipes, including their bio, picture, ratings, and likes',
			'Create an account and login to see and save your favorite recipes, chefs, and leave comments and ratings',
			'Sign in with your Gmail or GitHub account for a seamless experience',
			'Reset your password or verify your email address with Firebase authentication',
			'Responsive design that adapts to any screen size or device',
			'Accessible design with appropriate color contrast',
			'Error handling and user-friendly error messages',
			'Lazy loading to improve performance',
		],
		links: {
			live_site: 'https://spicy-mexican-chefs.web.app/',
			client_code:
				'https://github.com/safayetdib/spicy-mexican-chefs-client-side',
			server_code:
				'https://github.com/safayetdib/spicy-mexican-chefs-server-side',
		},
		additionalDetails:
			"Spicy Mexican Chefs is built using a modern tech stack, including React JS for building the user interface and components, React Router for client-side routing, Tailwind CSS for styling and layout, Firebase for backend services, including authentication, database, and storage, and Express.js for building the server-side application. It features a range of functionalities, such as browsing recipes by chef, learning more about chefs' details and ratings, creating an account to save favorite recipes and chefs, leaving comments and ratings, and signing in seamlessly with Gmail or GitHub accounts. The project also incorporates responsive design for optimal viewing on any screen size or device, accessibility considerations with appropriate color contrast, error handling with user-friendly error messages, and lazy loading to improve performance.",
		banner_img: '/assets/spicy-mexican-chefs/fullscreen.png',
		screenshots: [
			'/assets/spicy-mexican-chefs/banner.png',
			'/assets/spicy-mexican-chefs/about.png',
			'/assets/spicy-mexican-chefs/chefs.png',
			'/assets/spicy-mexican-chefs/details.png',
			'/assets/spicy-mexican-chefs/footer.png',
			'/assets/spicy-mexican-chefs/recipes.png',
			'/assets/spicy-mexican-chefs/signin.png',
			'/assets/spicy-mexican-chefs/signup.png',
		],
	},
	{
		id: '3',
		name: 'React Task Manager',
		description:
			'This is a task management project built using React. It allows users to add, delete, and update tasks. The app provides features such as task filtering and selection based on status (pending, in progress, completed). The server-side implementation uses Express.js and MongoDB for CRUD operations.',
		technologies: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
		links: {
			live_site:
				'https://647c0e8dda391b6c3d2a1e8f--lighthearted-pony-6b36ad.netlify.app/',
			client_code:
				'https://github.com/safayetdib/task-management-app-client-side/tree/main',
			server_code:
				'https://github.com/safayetdib/task-management-app-server-side',
		},
		additionalDetails:
			'React Task Manager is a project focused on task management. The client-side implementation utilizes React along with other libraries such as Tailwind CSS, React Router, React Icons, SweetAlert2, Context API, and Fetch. It provides features like viewing a list of tasks, creating new tasks, updating/editing task details, marking tasks as completed, and deleting tasks. On the server-side, the project uses Node.js and Express.js to build a RESTful API for performing CRUD operations on tasks stored in a MongoDB database. Other technologies used on the server-side include MongoDB itself for data storage, cors for enabling Cross-Origin Resource Sharing, and dotenv for loading environment variables from a .env file.',
		banner_img: '/assets/task-manager/fullscreen.png',
		screenshots: [
			'/assets/task-manager/banner.png',
			'/assets/task-manager/add.png',
			'/assets/task-manager/delete.png',
			'/assets/task-manager/update.png',
		],
	},
];

export default ProjectsData;
