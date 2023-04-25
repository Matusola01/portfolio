import Image from 'next/image';
import React from 'react';
import HenryDogs from '../public/assets/projects/HenryDogs.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const henrydogs = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image className="absolute z-1" layout="fill" objectFit="cover" src={HenryDogs} alt="/" />
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Henry Dogs App</h2>
					<h3>React JS / HTML & CSS / PostgreSQL</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<h2>Descripción General</h2>
					<p>
						Durante mi participación en el bootcamp Soy Henry, he desarrollado una aplicación para amantes
						de los perros. Esta aplicación permite a los usuarios explorar una variedad de razas caninas,
						consumiendo datos de una API y mostrándolos en el front-end. Los usuarios pueden filtrar,
						ordenar y buscar por diferentes razas, así como también crear nuevas. La aplicación se construyó
						utilizando tecnologías modernas, incluyendo React para el front-end y Node.js para el back-end.
						Se utilizó una API de perros existente para obtener información sobre cada raza, incluyendo
						imágenes y detalles de la raza. Los usuarios pueden explorar cada raza, ver imágenes y detalles
						específicos, y guardar sus razas favoritas para acceder a ellas fácilmente en el futuro. También
						se incluyó la capacidad de agregar nuevas razas a la base de datos, lo que permite a los
						usuarios contribuir a la comunidad y agregar información sobre razas menos conocidas.
					</p>
					<Link href="https://github.com/Matusola01/PI-Dogs" target="_blank" rel="noreferrer">
						<button className="px-8 py-2 mt-4 mr-8">Código</button>
					</Link>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">tecnologías</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> React
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Redux
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> HTML
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> CSS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Node.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Express.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> PostgreSQL
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

export default henrydogs;
