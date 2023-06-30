import { Fade } from 'react-awesome-reveal';
import project1 from '../../assets/jedi.png';

const Project = () => {
	return (
		<Fade>
			<div className="group mt-20 flex flex-col justify-between gap-10 rounded border border-b bg-gray-100 p-10 shadow-lg md:flex-row">
				{/* image */}
				<div className="h-40 overflow-hidden md:h-64">
					<Fade>
						<img
							src={project1}
							alt=""
							className="h-full w-full translate-y-0 transform transition-transform duration-[10s] group-hover:-translate-y-full md:w-[800px]"
						/>
					</Fade>
				</div>
				{/* details */}
				<div className="space-y-6 overflow-hidden">
					{/* <Slide> */}
					<h4 className="text-2xl font-bold md:text-3xl">
						The Jedi&apos;s Trunk
					</h4>
					<p className="text-sm sm:text-base md:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi
						sunt dolor quidem ex quia ipsa doloremque veniam voluptatibus facere
						eius, blanditiis consequatur natus quos, velit sequi est itaque
						officia.
					</p>
					<button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:text-xl">
						Case Study
					</button>
					{/* </Slide> */}
				</div>
			</div>
		</Fade>
	);
};

export default Project;
