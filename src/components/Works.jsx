import styled from 'styled-components';

const Section = styled.div`
	background-color: #000000;
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
	padding-left: 50px;
	display: flex;
	justify-content: space-between;
	gap: 30px;
	color: #808080;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding-top: 120px;
	/* opacity: 0.5; */
	justify-content: start;
	align-items: center;
	gap: 20px;
	background-image: url('./img/molecule1.jpg');
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center;
	@media (max-width: 768px) {
		padding-top: 20px; /* Adjusted padding for smaller screens */
		background-size: cover;
	}
`;

const Title = styled.h1`
	color: #ddc8c4;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size: 35px;
	font-weight: 400;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	/* flex-direction: column;
	align-items: center;*/
	justify-content: center;
`;

const SamplesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: end;
	padding-bottom: 120px;
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;
	}
`;
const SampleItemContainer1 = styled.div`
	flex: 1;
	/* width: 150px; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 768px) {
		margin-right: 20px;
		margin-bottom: 0;
	}
	/* margin-right: 20px; Add margin-right here */
`;

const SampleItemContainer2 = styled.div`
	flex: 1;
	/* width: 150px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 768px) {
		margin-right: 20px;
		margin-bottom: 0;
	}
	/* margin-right: 20px; Add margin-right here */
`;

const SampleItemContainer3 = styled.div`
	flex: 1;
	/* width: 150px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 768px) {
		margin-right: 20px;
		margin-bottom: 0;
	}
	/* margin-right: 20px; Add margin-right here */
`;

const SampleIcon = styled.img`
	width: 100px;
	object-fit: scale-down;
	position: relative;
	cursor: pointer;
	animation: fancy-animate 4s infinite ease-out;

	@keyframes fancy-animate {
		0% {
			transform: translateY(0px);
			opacity: 0.5;
		}
		50% {
			transform: translateY(20px);
			opacity: 0.2;
		}
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
`;
const SampleTitle = styled.div`
	margin-top: 20px;
	font-size: small;
	text-align: center;
`;
const SampleDescription = styled.div`
	font-size: small;
`;

const Img = styled.img`
	width: 100%;
	max-width: 600px;
	height: auto;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		100% {
			transform: translateY(20px);
		}
	}
`;

const A = styled.a`
	text-decoration: none;
	color: #8a8888;
	transition: color 0.3s ease; /* Add a transition effect for a smooth color change */
`;

const Works = () => {
	return (
		<Section id="Works">
			<Container>
				<Left>
					<Title>
						ReactJS <br></br>Sample Work
					</Title>
				</Left>
				<Right>
					<SamplesContainer>
						<SampleItemContainer1>
							<A href="https://mukulembezewil.github.io/my_first_react_app/">
								<SampleIcon src="./img/flask.png" />
								<SampleTitle>
									Movie <br></br>library
								</SampleTitle>
							</A>
							{/* this is the video library app */}
							<SampleDescription></SampleDescription>
						</SampleItemContainer1>
						<SampleItemContainer2>
							<A href="https://mukulembezewil.github.io/gpt3infosite/">
								<SampleIcon src="./img/test-tubes.png" />
								<SampleTitle>
									About<br></br>GPT-3
								</SampleTitle>
							</A>
						</SampleItemContainer2>
						<SampleItemContainer3>
							<A href="https://mukulembezewil.github.io/mernvideosharingApp_UI/">
								<SampleIcon src="./img/chemistry.png" />
								<SampleTitle>
									Video <br></br>Sharing App
								</SampleTitle>
							</A>
						</SampleItemContainer3>
					</SamplesContainer>
				</Right>
			</Container>
		</Section>
	);
};
export default Works;

/*
Attribute for flask.png
<a href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons">Chemistry icons created by Freepik - Flaticon</a>*/

/*
Attribute for test-tubes.png
<a href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons">Chemistry icons created by jocularityart - Flaticon</a>*/

/*
Attribute for chemistry.png
<a href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons">Chemistry icons created by Freepik - Flaticon</a>*/
