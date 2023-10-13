import styled from 'styled-components';
import React, { useState } from 'react';

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
	width: 1000px;
	display: flex;
	justify-content: space-between;
	gap: 30px;
	color: #808080;
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
	/* font-size: 32px; */
`;

const Line = styled.img`
	height: 5px;
`;

const Description = styled.p`
	font-size: small;
	font-weight: 300;
	text-align: justify;
`;

const MoreAboutMe = styled.div`
	font-size: small;
	font-weight: 300;
	text-align: justify;
	/* display: none; */
	height: ${(props) => (props.show ? 'auto' : '0')};
	overflow: hidden;
	transition: height 0.5s ease-in-out; // Adjust the duration as needed
`;

const Button = styled.button`
	background: rgb(218, 165, 32);
	background: linear-gradient(
		90deg,
		rgba(218, 165, 32, 1) 0%,
		rgba(242, 215, 31, 1) 35%,
		rgba(237, 149, 26, 1) 100%
	);
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 4;
	/* position: relative; */
	display: flex; /* Add display: flex to create a flex container */
	flex-direction: column; /* Arrange child elements in a column */
`;
const Img = styled.img`
	position: relative;
	width: 600px;
	object-fit: scale-down;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		100% {
			transform: translateY(20px);
		}
	}
`;

const QuoteContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 50px;
`;

const Quote = styled.div`
	font-size: small;
	font-weight: 300;
	font-style: italic;
	padding: 0 60px 0 60px;
`;

const ReadButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	color: #042a2b;
	text-decoration: none;
	font-size: small;
	font-weight: 300;
`;

const Who = () => {
	const [showMore, setShowMore] = useState(false);

	const toggleMore = () => {
		setShowMore(!showMore);
	};

	return (
		<Section>
			<Container>
				<Left>
					<Title>Peek Into My World</Title>
					<WhatIDo>
						<Line src="./img/line.png" />
					</WhatIDo>
					<Description>
						I am an avid learner and a proficient software developer with five years
						of experience in MERN full-stack development. I am keen on delivering
						exceptional user experiences, prioritizing scalability and performance,
						emphasizing security measures, and upholding the highest standards of code
						quality and maintainability. Additionally, I excel in agile development
						practices and thrive in collaborative team environments.
					</Description>
					<MoreAboutMe
						show={showMore}
						// style={{ display: showMore ? 'block' : 'none' }}
					>
						Working on teams has been a delight. I like to fan aflame a
						growth-oriented mindset within the team, encouraging a culture of
						continuous learning, innovation, and collaboration, where each member
						takes ownership of their work, seeks excellence in problem-solving, and
						adapts swiftly to evolving technologies and challenges to achieve peak
						performance.
					</MoreAboutMe>
					<ReadButton onClick={toggleMore}>
						{showMore ? "You: I've had enough of this! ▲" : 'Me: More? ▼'}
					</ReadButton>
				</Left>
				<Right>
					<Img src="./img/house.jpg" />
					<QuoteContainer>
						<Quote>
							"Clear images of definite objectives are the seed ideas of future
							manifestations."
						</Quote>
					</QuoteContainer>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
