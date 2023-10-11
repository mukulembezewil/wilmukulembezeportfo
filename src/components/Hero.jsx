import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	/* width: 1000px; */
	display: flex;
	justify-content: space-between;
	gap: 30px;
	padding: 40px;
`;

const Left = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;
const WhatIDo = styled.div`
	display: flex;
	align-items: center;

	gap: 10px;
`;

const Title = styled.h1`
	font-size: 25px;
	font-weight: 400;
`;

const Subtitle = styled.h2`
	font-size: 20px;
	font-weight: 300;
`;

const Description = styled.p`
	font-size: small;
	font-weight: 300;
	text-align: justify;
`;

const Button = styled.button`
	background: rgb(218, 165, 32);
	background: linear-gradient(90deg, #803776 0%, #51225f 35%, #803776 100%);
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 4;
	position: relative;
`;

const Img = styled.img`
	width: 450px;
	height: 350px;
	object-fit: scale-down;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease-out alternate;

	@keyframes animate {
		100% {
			transform: translateY(20px);
		}
	}
`;

const Hero = () => {
	return (
		<Section>
			<Navbar />
			<Container>
				<Left>
					<Title>Mukulembeze P. Wilfred</Title>
					<WhatIDo>
						<Subtitle>Envision! Focus! Design! Develop! Build!</Subtitle>
					</WhatIDo>
					<Description>
						I am an avid learner and a proficient software developer with five years
						of experience in MERN full-stack development. I am keen on delivering
						exceptional user experiences, prioritizing scalability and performance,
						emphasizing security measures, and upholding the highest standards of code
						quality and maintainability. Additionally, I excel in agile development
						practices and thrive in collaborative team environments."
					</Description>
					<Description>
						Working on teams has been a delight. I like to fan aflame a
						growth-oriented mindset within the team, encouraging a culture of
						continuous learning, innovation, and collaboration, where each member
						takes ownership of their work, seeks excellence in problem-solving, and
						adapts swiftly to evolving technologies and challenges to achieve peak
						performance.
					</Description>
					{/* <Button>More</Button> */}
				</Left>
				<Right>
					{/* 3d model */}
					<Img src="./img/skills.png" />
				</Right>
			</Container>
		</Section>
	);
};
export default Hero;
