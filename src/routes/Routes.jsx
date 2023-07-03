import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/project/:id',
				element: <ProjectDetail />,
			},
		],
	},
]);

export default router;
