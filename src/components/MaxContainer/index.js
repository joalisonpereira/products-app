import React from 'react';
import { Icon } from 'antd';
import { 
	Container,
	Header, 
	Logo, 
	Nav, 
	Section, 
	Footer } from './styles';

const MaxContainer = ({children}) => (
	<Container>
	    <Header>
	      <Logo>
	      	<a href="#">
	      		<Icon type="build" className="icon"/>
				Products App
	      	</a>
	      </Logo>
	      <Nav>
	        <a href="#">Dashboard</a>
	        <a target="_blank" rel="noopener noreferrer" href="https://github.com/joalisonpereira/products-app">Source</a>
	      </Nav>
	    </Header>
        <Section>
      	   {children}
        </Section>
	    <Footer>
	      All rights reserved &copy; 2018
	    </Footer>
	</Container>
);

export default MaxContainer;