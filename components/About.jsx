import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/AboutImg.jpg';

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#641C34]">Sobre mí</p>
					<h2 className="py-4">¿Quién soy?</h2>
					<p className="py-2 text-gray-600">
						Me llamo Mateo. Tengo 21 años y me considero un apasionado desarrollador fullstack, con
						experiencia en diferentes proyectos académicos en los que he aplicado mis conocimientos y
						habilidades. Actualmente, estoy en busca de cambiar mi vida y seguir perfeccionándome día a día.
					</p>
					<p className="py-2 text-gray-600">
						La programación llegó a mi vida durante la pandemia, un momento difícil para todos, pero también
						lleno de nuevas oportunidades. Empecé mi carrera en la facultad de Ingeniería, aunque
						rápidamente me di cuenta de que no cumplía con mis expectativas. Fue entonces cuando decidi
						comenzar mi carrera como autodidacta, donde mi interés por la programación se encendió y
						descubrí mi pasión por esta profesión.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">Mira mis ultimos proyectos.</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
