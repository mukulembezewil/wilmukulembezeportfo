import styled from 'styled-components';

const Section = styled.div`
	background-color: #ffffff;
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
	opacity: 0.6;
	justify-content: start;
	align-items: center;
	gap: 20px;
	background-image: url('./img/molecule2.jpg');
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center;
	@media (max-width: 768px) {
		padding-top: 20px; /* Adjusted padding for smaller screens */
		background-size: cover;
	}
`;

const Title = styled.h1`
	color: #2c2a2a;
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
	width: 80px;
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

const Nodeworks = () => {
	return (
		<Section id="Nodeworks">
			<Container>
				<Left>
					<Title>
						NodeJS <br></br>Sample Work
					</Title>
				</Left>
				<Right>
					<SamplesContainer>
						<SampleItemContainer1>
							<SampleIcon src="./img/njs_wk1.png" />
							<SampleTitle>
								Social <br></br>Media App
							</SampleTitle>
							<SampleDescription></SampleDescription>
						</SampleItemContainer1>
						<SampleItemContainer2>
							<SampleIcon src="./img/njs_wk2.png" />
							<SampleTitle>
								MERN<br></br>Blog
							</SampleTitle>
						</SampleItemContainer2>
						<SampleItemContainer3>
							<SampleIcon src="./img/njs_wk3.png" />
							<SampleTitle>
								Fullstack <br></br>MERN App
							</SampleTitle>
						</SampleItemContainer3>
					</SamplesContainer>
				</Right>
			</Container>
		</Section>
	);
};
export default Nodeworks;

/*
Attribute for njs_wk1.png
<a href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons">Chemistry icons created by surang - Flaticon</a>*/

/*
Attribute for njs_wk2.png
<a href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons">Chemistry icons created by Bamicon - Flaticon</a>*/

/*
Attribute for chemistry.png
<a href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons">Chemistry icons created by Bamicon - Flaticon</a>*/
