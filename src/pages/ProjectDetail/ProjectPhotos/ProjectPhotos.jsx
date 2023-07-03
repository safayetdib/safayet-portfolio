const ProjectPhotos = ({ projectData }) => {
	const { screenshots } = projectData;

	return (
		<section className="mt-16">
			<div>
				<div className="space-y-8">
					{screenshots.map((item, index) => (
						<img key={index} src={item} alt="" />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectPhotos;
