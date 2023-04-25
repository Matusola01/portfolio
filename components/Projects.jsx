import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SantaCruz from '../public/assets/projects/SantaCruz.png';
import HenryDogs from '../public/assets/projects/HenryDogs.png';
import Sindicato from '../public/assets/projects/Sindicato.png';
import PlayCenter from '../public/assets/projects/PlayCenter.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#641C34]">Mis Proyectos</p>
				<h2 className="py-4">Lo que he construído</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Play Center App"
						backgroundImg={PlayCenter}
						projectUrl="/playcenter"
						tech="React JS"
					/>
					<ProjectItem
						title="Henry Dogs App"
						backgroundImg={HenryDogs}
						projectUrl="/henrydogs"
						tech="React JS"
					/>
					<ProjectItem
						title="Santa Cruz Servicios"
						backgroundImg={SantaCruz}
						projectUrl="/santacruz"
						tech="Next JS"
					/>
					<ProjectItem
						title="Sindicato de cerveceros de Salta"
						backgroundImg={Sindicato}
						projectUrl="/sindicato"
						tech="Next JS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
