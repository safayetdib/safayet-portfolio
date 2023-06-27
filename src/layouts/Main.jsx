import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
	return (
		<div className="font-mono min-h-screen bg-gray-100 tracking-widest">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;
