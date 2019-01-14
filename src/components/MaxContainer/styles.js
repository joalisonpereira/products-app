import styled from 'styled-components';
import { metrics } from '../../styles';

export const Container = styled.div`
	width: 98%;
	margin: 0 auto;
`;

export const Header = styled.header`
	background-color: #FFF;
	padding-left: ${metrics.bigMargin};
	padding-right: ${metrics.mediumMargin};
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.div`
	font-size: 16px;
	margin-right: ${metrics.bigMargin};
	a{
		&:focus{
			text-decoration: none;
		}
	}
	.icon{
		margin-right: ${metrics.smallMargin}
	}
`;

export const Nav = styled.nav`
	a:first-child{
		margin-right: ${metrics.bigMargin}
	}
`;

export const Section = styled.section`
	background-color: '#FFF';
	padding: ${metrics.bigMargin}; 
	min-height: 450px;
`;

