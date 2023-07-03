import { Slide } from 'react-awesome-reveal';
import { MdOutlinePreview } from 'react-icons/md';

import { FaCode, FaHandPointRight } from 'react-icons/fa';

const ProjectInfo = ({ projectData }) => {
	const {
		name,
		description,
		technologies,
		features,
		links,
		additionalDetails,
	} = projectData;

	return (
		<section>
			<div className="mt-16 space-y-12 text-center">
				<h2 className="text-4xl font-bold">{name}</h2>
				<div className="flex items-center justify-center gap-2">
					<a
						href={links.live_site}
						target="_blank"
						rel="noreferrer"
						className="flex w-fit cursor-pointer items-center gap-3 border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:text-lg">
						<span>
							<MdOutlinePreview />
						</span>
						Preview{' '}
					</a>
					<a
						href={links.client_code}
						target="_blank"
						rel="noreferrer"
						className="flex w-fit cursor-pointer items-center gap-3 border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:text-lg">
						<span>
							<FaCode />
						</span>
						Client Side Code{' '}
					</a>
					<a
						href={links.server_code}
						target="_blank"
						rel="noreferrer"
						className="flex w-fit cursor-pointer items-center gap-3 border-2 border-black px-4 py-2 font-bold uppercase tracking-widest transition hover:bg-black hover:text-white md:text-lg">
						<span>
							<FaCode />
						</span>
						Server Side Code{' '}
					</a>
				</div>
				<p>{additionalDetails}</p>
				<div className="flex items-center justify-center gap-2 overflow-hidden">
					{technologies.map((item, index) => (
						<Slide key={index}>
							<div className="flex w-fit items-center gap-2 bg-black px-4 py-2 text-sm font-bold uppercase tracking-widest text-white md:text-base">
								{item}
							</div>
						</Slide>
					))}
				</div>

				{/* <div className="flex items-center justify-center text-start">
					<ul>
						{features.map((item, index) => (
							<li key={index} className="flex items-center gap-4">
								<span>
									<FaHandPointRight />
								</span>
								<p>{item}</p>
							</li>
						))}
					</ul>
				</div> */}
			</div>
		</section>
	);
};

export default ProjectInfo;
