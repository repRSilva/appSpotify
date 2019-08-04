import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
	<Container>
		<Search>
			<input placeholder="Search" />
		</Search>
		<User>
			<img src="#" alt="Avatar" /> Rafael Ramos
		</User>
	</Container>
);

export default Header;
