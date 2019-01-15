import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const styles = {
	warningIcon: {
		color: 'red'
	},
	simpleIcon: {
		fontSize: '20px'
	}
};

export const FormIconWrapper = styled.a`
	font-size: 20px;
	margin: 0 ${metrics.mediumMargin};
	@media(max-width: 576px){
		margin: 0;
		display: block;
	}
`;

export const AddButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: ${metrics.bigMargin};
	left: 50%;
	transform: translateX(-50%);
	width: 50px;
	height: 50px;
	background-color: ${colors.primary};
	border-radius: 50%;
	border: none;
	font-size: 18px;
	color: #FFF;
	opacity: 0.9;
	transition: all .3s;
	&:hover{
		cursor: pointer;
		opacity: 1;
		transition: all .3s;
	}
	&:focus{
		outline: none;
	}
`;

