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
	width: 100%;
	display: flex;
	justify-content: space-around;
	gap: 30px;
	/* padding: 40px; */
	background: repeating-conic-gradient(
		rgb(1, 1, 1) 0%,
		rgb(32, 32, 32) 15%,
		rgb(15, 15, 15) 33%
	);
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
const WhatIDo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Title = styled.h1`
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size: 35px;
	font-weight: 400;
`;

const Subtitle = styled.h2`
	font-size: 16px;
	font-weight: 600;
`;

const AboutMe = styled.p`
	font-size: 14px;
	font-weight: 300;
	cursor: pointer;
`;

const A = styled.a`
	color: #ddc8c4;
	text-decoration: none;
	transition: color 0.3s ease; /* Add a transition effect for a smooth color change */

	&:hover {
		color: #a56b6b; /* Change the color on hover */
	}
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
	flex: 1;
	position: relative;
`;

const Img = styled.img`
	width: 350px;
	/* height: 350px; */
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
		<Section id="Hero">
			<Navbar />
			<Container>
				<Left>
					<Title>
						Mukulembeze P. <br></br>Wilfred
					</Title>
					<WhatIDo>
						<Subtitle>ღ Software Developer</Subtitle>
						<AboutMe>
							<A href="#Who">About me...</A>
						</AboutMe>
					</WhatIDo>
				</Left>
				<Right>
					{/* 3d model */}
					<Img src="./img/skillset.svg" />
				</Right>
			</Container>
		</Section>
	);
};
export default Hero;
