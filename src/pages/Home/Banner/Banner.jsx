import { FaFileDownload } from 'react-icons/fa';
import safayetResume from '/assets/safayetResume.pdf';

const Banner = () => {
	return (
		<section id="home" className="bg-black pt-[72px] text-gray-100">
			<div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-screen-xl flex-col items-center justify-center gap-8 divide-gray-100 px-4 py-4 uppercase md:flex-row md:divide-x-4">
				<div className="space-y-6 overflow-hidden text-center md:w-1/2 md:pl-8 md:text-left">
					<h2 className="">
						Hi! I&apos;m
						<span className="text-3xl font-extrabold md:text-5xl">
							Safayet Alam
						</span>
					</h2>

					<p className="text-sm sm:text-base md:text-lg">
						A Frontend focused Web Developer building the Frontend of Websites
						and Web Applications that leads to the success of the overall
						product
					</p>

					<a
						href={safayetResume}
						download="Safayet_Resume.pdf"
						title="Download Resume of Safayet"
						className="mx-auto flex w-fit cursor-pointer items-center gap-3 border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:mx-0 md:text-lg">
						<FaFileDownload className="text-xl" /> Download Resume
					</a>
				</div>
			</div>{' '}
		</section>
	);
};

export default Banner;
