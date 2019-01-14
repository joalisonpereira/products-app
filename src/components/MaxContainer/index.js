import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { 
	Container,
	Header, 
	Logo, 
	Nav, 
	Section } from './styles';

const MaxContainer = ({children,fadeIn=true}) => (
	<Container>
	    <Header>
	      <Logo>
	      	<Link to="/">
	      		<Icon type="build" className="icon"/>
				Products App
	      	</Link>
	      </Logo>
	      <Nav>
	        <Link to="/dashboard">Dashboard</Link>
	        <a target="_blank" rel="noopener noreferrer" href="https://github.com/joalisonpereira/products-app">Source</a>
	      </Nav>
	    </Header>
        {
        	fadeIn ?
				<FadeIn>
					<Section>
			      	   {children}
			        </Section>
				</FadeIn>
        	:
        		<Section>
		      	   {children}
		        </Section>
        }
	</Container>
);

export default MaxContainer;