import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Si podemos imaginarlo, podemos crearlo!
					</p>
					<h1 className="py-4 text-gray-700">
						Hola! Soy <span className="text-[#641C34]"> Mateo</span>
					</h1>
					<h1 className="py-2 text-gray-700">Desarrollador Web Fullstack</h1>
					<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
						Desarrollador web fullstack con experiencia en diversos proyectos. En busqueda de crecer día a
						día y perfeccionar mis habilidades, siempre dispuesto a aprender y enfrentar nuevos desafíos.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/mateo-sol%C3%A1-torres-1aa576236"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a href="https://github.com/Matusola01" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<Link href="/#contact">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</Link>
						<Link
							href="assets/Mateo_Solá_-_Desarrollador_Fullstack.pdf"
							download="Mateo_Solá_-_Desarrollador_Fullstack.pdf"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<BsFillPersonLinesFill />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
