import {
	FaLinkedin,
	FaGithub,
	FaTwitterSquare,
	FaFacebook,
	FaInstagramSquare,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-black text-white">
			<div className="mx-auto max-w-screen-xl items-center justify-between gap-10 px-4 py-20 md:flex">
				{/* img + logo + description */}
				<div className="space-y-4 md:w-2/5">
					<a href="#home" className="tracking-[8px]">
						<h2 className="font-monofett text-3xl uppercase sm:text-4xl">
							Safayet
						</h2>
					</a>

					<p>
						A Frontend focused Web Developer building the Frontend of Websites
						and Web Applications that leads to the success of the overall
						product
					</p>
				</div>

				{/* social links */}
				<div>
					<h4 className="mt-8 text-2xl font-bold uppercase md:mt-0">Social</h4>
					<div className="mt-4 flex items-center gap-4 text-2xl">
						{/* linkedin */}
						<a
							href="https://www.linkedin.com/in/safayetdib/"
							title="LinkedIn"
							target="_blank"
							rel="noreferrer"
							className="transition duration-300 hover:rotate-6">
							<FaLinkedin />
						</a>

						{/* github */}
						<a
							href="https://github.com/safayetdib"
							title="GitHub"
							target="_blank"
							rel="noreferrer"
							className="transition duration-300 hover:rotate-6">
							<FaGithub />
						</a>

						{/* facebook */}
						<a
							href="https://www.facebook.com/safayetdib/"
							title="Facebook"
							target="_blank"
							rel="noreferrer"
							className="transition duration-300 hover:rotate-6">
							<FaFacebook />
						</a>

						{/* instagram */}
						<a
							href="https://www.instagram.com/safayetdib/"
							title="Instagram"
							target="_blank"
							rel="noreferrer"
							className="transition duration-300 hover:rotate-6">
							<FaInstagramSquare />
						</a>

						{/* twitter */}
						<a
							href="https://twitter.com/SafayetAdib"
							title="Twitter"
							target="_blank"
							rel="noreferrer"
							className="transition duration-300 hover:rotate-6">
							<FaTwitterSquare />
						</a>
					</div>
				</div>
			</div>
			<div className="border-t border-t-gray-700 px-4 py-4 text-center text-xs">
				© Copyright 2023. Made by
				<span>
					<a
						href="https://www.linkedin.com/in/safayetdib/"
						title="LinkedIn Profile of Safayet"
						target="_blank"
						rel="noreferrer"
						className="ml-2 underline">
						Safayet Alam
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
