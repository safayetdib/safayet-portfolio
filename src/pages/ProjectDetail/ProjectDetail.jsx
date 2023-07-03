import { useParams } from 'react-router-dom';
import ProjectsData from '../../../public/data/ProjectsData';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectPhotos from './ProjectPhotos/ProjectPhotos';

const ProjectDetail = () => {
	const { id } = useParams();

	const projectData = ProjectsData.find((data) => data.id === id);

	console.log(projectData);

	return (
		<main className="mx-auto min-h-screen max-w-screen-xl px-4 pb-20 pt-[72px]">
			<ProjectInfo projectData={projectData} />
			<ProjectPhotos projectData={projectData} />
		</main>
	);
};

export default ProjectDetail;
