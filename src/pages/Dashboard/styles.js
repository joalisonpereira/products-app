import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const AddButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: ${metrics.mediumMargin};
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

export const styles = {
	spin:{
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	}
};