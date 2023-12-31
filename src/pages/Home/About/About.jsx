import { Fade } from 'react-awesome-reveal';
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {
	BiLogoJavascript,
	BiLogoTailwindCss,
	BiLogoMongodb,
} from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';

const skillsData = [
	{
		icon: <FaReact />,
		name: 'React',
	},
	{
		icon: <BiLogoJavascript />,
		name: 'JavaScript',
	},
	{
		icon: <BiLogoTailwindCss />,
		name: 'Tailwind CSS',
	},
	{
		icon: <FaBootstrap />,
		name: 'Bootstrap',
	},
	{
		icon: <FaHtml5 />,
		name: 'HTML',
	},
	{
		icon: <FaCss3Alt />,
		name: 'CSS',
	},
	{
		icon: <BiLogoMongodb />,
		name: 'MongoDB',
	},
	{
		icon: <SiExpress />,
		name: 'Express',
	},
];

const About = () => {
	return (
		<section
			id="about"
			className="mx-auto min-h-[calc(100vh-72px)] max-w-screen-xl px-4 pb-20 pt-[72px]">
			{/* header */}
			<div className="mx-auto mt-4 max-w-4xl space-y-4 text-center ">
				<h2 className="text-3xl font-extrabold uppercase md:text-5xl">
					About Me
				</h2>
				<div className="mx-auto h-2 w-10 rounded-full bg-black"></div>
				<p className="text-sm sm:text-base md:text-lg">
					Here you will find more information about me, what I do, and my
					current skills mostly in terms of programming and technology
				</p>
			</div>

			{/* details */}
			<div className="mt-10 justify-between gap-10 md:flex">
				{/* get to know me */}
				<div className="space-y-6 overflow-hidden md:w-1/2">
					<Fade>
						<h4 className="text-2xl font-bold">Get to know me!</h4>
						<p className="text-sm sm:text-base md:text-lg">
							I'm a Frontend Web Developer building the Front-end of Websites
							and Web Applications that leads to the success of the overall
							product. Check out some of my work in the Projects section. <br />
							I also like sharing content related to the stuff that I have
							learned over the years in Web Development so it can help other
							people of the Dev Community. Feel free to Connect or Follow me on
							my Linkedin where I post useful content related to Web Development
							and Programming. <br />
							I'm open to Job opportunities where I can contribute, learn and
							grow. If you have a good opportunity that matches my skills and
							experience then don't hesitate to contact me.
						</p>

						<button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:text-xl">
							Contact
						</button>
					</Fade>
				</div>

				<div className="my-auto hidden h-80 w-1 rounded-full bg-black md:flex"></div>

				{/*  my skills */}
				<div className="mt-10 overflow-hidden md:mt-0 md:w-1/2">
					<h4 className="text-2xl font-bold">My Skills</h4>

					<div className="mt-8 flex flex-wrap gap-4">
						{skillsData.map((item, index) => (
							<Fade key={index}>
								<div className="flex items-center gap-2 bg-black px-4 py-2 font-bold uppercase tracking-widest text-white md:text-xl">
									{item.icon} {item.name}
								</div>
							</Fade>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
