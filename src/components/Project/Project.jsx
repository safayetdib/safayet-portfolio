import { Fade, Slide } from 'react-awesome-reveal';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Project = ({ data }) => {
	return (
		<Fade>
			<Link
				to={`/project/${data.id}`}
				className="group mt-20 flex cursor-pointer flex-col justify-between gap-10 rounded border bg-gray-100 p-4 shadow-lg transition duration-500 hover:bg-gray-50 md:flex-row md:p-10 ">
				{/* image */}
				<div className="h-40 overflow-hidden rounded md:h-64">
					<Fade>
						<img
							src={data.banner_img}
							alt=""
							className="h-full w-full translate-y-0 transform rounded transition-transform duration-[10s] group-hover:-translate-y-3/4 md:w-[800px]"
						/>
					</Fade>
				</div>
				{/* details */}
				<div className="space-y-6 overflow-hidden">
					{/* <Slide> */}
					<h4 className="flex items-center gap-3 text-2xl font-bold md:text-3xl">
						{data.name}{' '}
						<span>
							<HiMiniArrowUpRight className="transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105" />
						</span>
					</h4>
					<p className="text-sm sm:text-base md:text-lg">{data.description} </p>

					<div className="flex flex-wrap items-center gap-2">
						{data.technologies.map((item, index) => (
							<Slide key={index}>
								<div className="flex w-fit items-center gap-2 bg-black px-4 py-2 text-sm font-bold uppercase tracking-widest text-white md:text-base">
									{item}
								</div>
							</Slide>
						))}
						{/* <button className="ml-auto border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:text-xl">
							Case Study
						</button> */}
					</div>

					{/* </Slide> */}
				</div>
			</Link>
		</Fade>
	);
};

export default Project;
