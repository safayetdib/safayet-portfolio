import { Fade, Slide } from 'react-awesome-reveal';

const Banner = () => {
	return (
		<section className="bg-gray-200">
			<div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-screen-xl flex-col items-center justify-center gap-8 divide-black px-4 py-4 uppercase md:flex-row md:divide-x-4">
				<div>
					<Fade>
						<img
							src="/src/assets/safayet.jpg"
							alt="Safayet Photo"
							className="h-40 w-40 rounded-full object-cover shadow ring-4 ring-black md:h-60 md:w-60"
						/>
					</Fade>
				</div>

				<div className="space-y-6 overflow-hidden text-center md:w-1/2 md:pl-8 md:text-left">
					<Slide>
						<h2 className="text-3xl font-extrabold md:text-5xl">
							Hi! I&apos;m Safayet Alam
						</h2>

						<p className="text-sm sm:text-base md:text-lg">
							A Frontend focused Web Developer building the Frontend of Websites
							and Web Applications that leads to the success of the overall
							product
						</p>

						<button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:text-xl">
							Download Resume
						</button>
					</Slide>
				</div>
			</div>
		</section>
	);
};

export default Banner;
