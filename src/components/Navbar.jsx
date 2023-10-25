import styled from 'styled-components';

const Container = styled.div`
	background-color: black;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1; /* Higher z-index to appear above other elements */
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Links = styled.div`
	display: flex;
	/* align-items: center; */
	/* gap: 50px; */
`;
const A = styled.a`
	text-decoration: none;
	color: #8a8888;
	transition: color 0.3s ease; /* Add a transition effect for a smooth color change */

	&:hover {
		color: white; /* Change the color on hover */
		border-top: solid 3px #241a1a;
	}
`;

const Logo = styled.img`
	width: 120px;
`;

const List = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
	/* padding-top: 42px; */
	/* padding-left: 75px; */
	color: #8a8888;
	font-size: 12px;
`;

const ListItem = styled.li`
	cursor: pointer;
`;

const Button = styled.button`
	/* margin-top: 20px; */
	width: 80px;
	height: 20px;
	font-size: 12px;
	color: #bad3f0;
	background: rgb(218, 165, 32);
	background: linear-gradient(90deg, #535353 0%, #353333 35%, #2e2d2d 100%);
	border: none;
	border-radius: 10px 0px 10px 0px;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		// <Section>
		<Container>
			<A href="#Hero">
				<Logo src="./img/logo.png" />
			</A>
			<Links>
				<List>
					<ListItem>
						<A href="#Hero">Home</A>
					</ListItem>
					<ListItem>
						<A href="#Works">ReactJS</A>
					</ListItem>
					<ListItem>
						<A href="#Nodeworks">NodeJS</A>
					</ListItem>
					<ListItem>VueJS</ListItem>
					<ListItem>JavaScript</ListItem>
					<ListItem>CSS</ListItem>
					<ListItem>
						<A href="#Contact">Contact</A>
					</ListItem>
				</List>
			</Links>
			<A href="#Contact">
				<Button>Hire Now</Button>
			</A>
			{/* <Icons></Icons> */}
		</Container>
		// </Section>
	);
};
export default Navbar;
