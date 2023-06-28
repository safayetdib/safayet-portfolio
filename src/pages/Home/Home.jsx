import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

const Home = () => {
	return (
		<main>
			{/* banner */}
			<Banner />

			{/* about */}
			<About />

			{/* projects */}
			<Projects />

			{/* contact */}
			<Contact />
		</main>
	);
};

export default Home;
