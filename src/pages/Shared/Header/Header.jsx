import { useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';

const navMenus = [
	{
		name: 'Home',
		path: '#home',
	},
	{
		name: 'About',
		path: '#about',
	},
	{
		name: 'Projects',
		path: '#projects',
	},
	{
		name: 'Contact',
		path: '#contact',
	},
];

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<header className="fixed left-0 right-0 top-0 z-30 bg-gray-100/90 px-4 py-4">
			<div className=" mx-auto flex  max-w-screen-xl items-center justify-between uppercase">
				<a href="#home" className="tracking-[8px]">
					<h2 className="font-monofett text-3xl sm:text-4xl">Safayet</h2>
				</a>

				<nav className="hidden md:flex">
					<ul className="flex items-center justify-center gap-8 text-xl font-semibold">
						{navMenus.map((item, index) => (
							<li key={index}>
								<a
									href={item.path}
									className="px-2 transition-all hover:bg-black hover:text-white">
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* mobile menu */}
				<button
					onClick={() => setIsNavOpen(!isNavOpen)}
					className="z-50 pt-1 text-3xl md:hidden">
					{isNavOpen ? <IoClose /> : <HiBars3BottomRight />}
				</button>

				{isNavOpen && (
					<nav className="absolute right-0 top-0 z-40 mr-2 mt-4 w-60 rounded border bg-gray-100 px-4 pb-8 pt-12 text-center shadow-lg md:hidden">
						<ul className="flex flex-col items-center justify-center gap-8 text-xl font-semibold">
							{navMenus.map((item, index) => (
								<li key={index}>
									<a
										href={item.path}
										className="px-2 transition-all hover:bg-black hover:text-white">
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
