import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const Main = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedMode = localStorage.getItem('darkMode');
		setIsDarkMode(savedMode === 'true');
	}, []);

	const handleToggle = () => {
		const newMode = !isDarkMode;
		setIsDarkMode(newMode);
		localStorage.setItem('darkMode', newMode);
		// You can add logic here to switch your website's theme between light and dark mode
	};

	return (
		<div className="min-h-screen bg-gray-100 font-mono tracking-widest">
			<Header />
			<Outlet />
			<Footer />

			<button
				onClick={handleToggle}
				className="fixed bottom-0 right-0 m-4 rounded-full bg-gray-800 px-4 py-2 text-white opacity-70 transition duration-300 hover:opacity-100">
				{isDarkMode ? <FaSun /> : <FaMoon />}
			</button>

			<Toaster />
		</div>
	);
};

export default Main;
