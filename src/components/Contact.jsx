import styled from 'styled-components';

const Section = styled.div`
	background-color: #000000;
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Container = styled.div`
	/* height: 100vh; */
	scroll-snap-align: center;
	width: 40%;
	/* padding-top: 150px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	color: #0a0000;
`;

const Title = styled.h1`
	color: #0f0300;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size: 25px;
	font-weight: 400;
`;

const SampleItemContainer3 = styled.div`
	flex: 1;
	/* width: 150px; */
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: space-around;
`;

const SampleIconIcon = styled.img`
	width: 30px;
	object-fit: scale-down;
	position: relative;
`;

const SampleIcon = styled.img`
	width: 300px;
	object-fit: scale-down;
	position: relative;
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

const Contact = () => {
	return (
		<Section id="Contact">
			<Container>
				<Title>Contact me</Title>
				<SampleItemContainer3>
					<SampleIconIcon src="./img/phonecall.svg" /> &nbsp; &nbsp;
					<SampleIconIcon src="./img/whatsapp.png" />
				</SampleItemContainer3>
				<SampleItemContainer3>
					<SampleIcon src="./img/contactphone.png" />
				</SampleItemContainer3>
				<SampleItemContainer3>
					<SampleIconIcon src="./img/emailicon.png" />
				</SampleItemContainer3>
				<SampleItemContainer3>
					<SampleIcon src="./img/email.png" />
				</SampleItemContainer3>
			</Container>
		</Section>
	);
};
export default Contact;
