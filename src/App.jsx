import styled from 'styled-components';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Nodeworks from './components/Nodeworks';

const Container = styled.div`
	height: 100vh;
	/* background-color: #301934; */
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	color: #ddc8c4;
	/* background: url('./img/bg.jpeg'); */
	&::-webkit-scrollbar {
		display: none;
	}
`;

function App() {
	return (
		<Container>
			<Hero />
			<Who />
			<Works />
			<Nodeworks />
			<Contact />
		</Container>
	);
}

export default App;
