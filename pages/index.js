import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Mateo | Fullstack Developer</title>
				<meta name="description" content="Desarrollador Web con experiencia en diferentes proyectos." />
				<link rel="icon" href="/fav.png" />
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
		</div>
	);
}
