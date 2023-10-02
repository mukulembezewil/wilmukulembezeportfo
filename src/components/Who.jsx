import styled from 'styled-components';

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

const Subtitle = styled.h2``;

const Description = styled.p``;

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
	position: relative;
`;
const Img = styled.img`
	width: 600px;
	height: 400px;
	object-fit: scale-down;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		100% {
			transform: translateY(20px);
		}
	}
`;

const Who = () => {
	return (
		<Section>
			<Container>
				<Left>
					<Title>Envision! Focus! Design! Develop! Build!</Title>
					<WhatIDo>
						<Line src="./img/line.png" />
						<Subtitle>Mukulembeze P. Wilfred</Subtitle>
					</WhatIDo>
					<Description>Create a piece here!</Description>
					<Button>More</Button>
				</Left>
				<Right>
					{/* 3d model */}
					<Img src="./img/moon.png" />
				</Right>
			</Container>
		</Section>
	);
};
export default Who;
