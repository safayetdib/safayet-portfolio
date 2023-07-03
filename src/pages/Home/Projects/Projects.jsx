import Project from '../../../components/Project/Project';
import ProjectsData from '../../../../public/data/ProjectsData';

const Projects = () => {
	return (
		<section id="projects" className="bg-gray-50 pb-20 pt-[72px]">
			<div className="mx-auto min-h-[calc(100vh-72px)] max-w-screen-xl px-4">
				{/* header */}
				<div className="mx-auto mt-4 max-w-4xl space-y-4 text-center ">
					<h2 className="text-3xl font-extrabold uppercase md:text-5xl">
						Projects
					</h2>
					<div className="mx-auto h-2 w-10 rounded-full bg-black"></div>
					<p className="text-sm sm:text-base md:text-lg">
						Here you will find some of the personal and clients projects that I
						created with each project containing its own case study
					</p>
				</div>

				{/* projects */}
				<div>
					{/* project */}
					{ProjectsData.map((data, index) => (
						<Project key={index} data={data} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
