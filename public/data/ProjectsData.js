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
			client_code: '<link-to-client-side-code>',
			server_code: '<link-to-server-side-code>',
		},
		additionalDetails: `The project features a toy marketplace built with React, enabling users to seamlessly browse, add, update, and delete products. Navigation within the application is facilitated by React Router, while the Context API ensures efficient state management. The implementation of Firebase authentication ensures secure user registration and login. Furthermore, CRUD functionality for toy data is enabled through the utilization of Express.js and MongoDB, allowing for convenient management and interaction with the marketplace's inventory.`,
		banner_img: '/src/assets/the-jedis-trunk/fullscreen.png',
		screenshots: [
			'/src/assets/the-jedis-trunk/banner.png',
			'/src/assets/the-jedis-trunk/alltoys.png',
			'/src/assets/the-jedis-trunk/mytoys.png',
			'/src/assets/the-jedis-trunk/updatetoy.png',
			'/src/assets/the-jedis-trunk/deletetoy.png',
			'/src/assets/the-jedis-trunk/addtoy.png',
			'/src/assets/the-jedis-trunk/signin.png',
			'/src/assets/the-jedis-trunk/signup.png',
		],
	},
];

export default ProjectsData;
