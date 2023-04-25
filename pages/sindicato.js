import Image from 'next/image';
import React from 'react';
import Sindicato from '../public/assets/projects/Sindicato.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const sindicato = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image className="absolute z-1" layout="fill" objectFit="cover" src={Sindicato} alt="/" />
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Sindicato de cerveceros Salta</h2>
					<h3>Next JS / Firebase</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<h2>Descripción General</h2>
					<p>
						Landing page realizada para el sindicato de cerveceros de Salta. Se trata de un sitio web que
						combina información sobre el sindicato con herramientas de gestión de miembros, lo que lo hace
						más eficiente y fácil de usar tanto para los miembros como para los administradores del
						sindicato.
					</p>
					<Link href="https://github.com/Matusola01/cerveceros2" target="_blank" rel="noreferrer">
						<button className="px-8 py-2 mt-4 mr-8">Código</button>
					</Link>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">tecnologías</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Next.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Tailwind
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Firebase
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Node.js
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<button className="px-8 py-2 mt-4">Atrás</button>
				</Link>
			</div>
		</div>
	);
};

export default sindicato;
