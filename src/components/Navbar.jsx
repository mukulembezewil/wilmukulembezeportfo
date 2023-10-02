import styled from 'styled-components';

const Section = styled.div`
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	width: 1000px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const Logo = styled.img`
	width: 160px;
`;

const List = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
	padding-top: 42px;
	padding-left: 75px;
	color: #504e4e;
`;

const ListItem = styled.li`
	cursor: pointer;
`;

const Icon = styled.img`
	padding-top: 30px;
	width: 20px;
	cursor: pointer;
`;

const Button = styled.button`
	margin-top: 20px;
	width: 100px;
	height: 30px;
	background: rgb(218, 165, 32);
	background: linear-gradient(
		90deg,
		rgba(218, 165, 32, 1) 0%,
		rgba(242, 215, 31, 1) 35%,
		rgba(237, 149, 26, 1) 100%
	);
	border: none;
	border-radius: 10px 0px 10px 0px;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<Section>
			<Container>
				<Links>
					<Logo src="./img/logo.png" />
					<List>
						<ListItem>Home</ListItem>
						<ListItem>ReactJS</ListItem>
						<ListItem>NodeJS</ListItem>
						<ListItem>VueJS</ListItem>
						<ListItem>Contact</ListItem>
					</List>
				</Links>
				<Icons>
					<Icon src="./img/search.png" />
					<Button>Hire Now</Button>
				</Icons>
			</Container>
		</Section>
	);
};
export default Navbar;
