import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles';

const _gravity = keyframes`
	0%{ margin-top:0 }
	25%{ margin-top:-20px }
	50%{ margin-top:0 }
	75%{ margin-top:-20px }
	100%{ margin-top:0 }
`;

export const Image = styled.img`
	position: absolute;
	width: 300px; 
	top: 50%;
	transform: translateY(-50%);
	left: 100px;
	animation: ${_gravity} 4s linear infinite;
	@media(max-width: 1200px){
		top: 70%;
		width: 250px;
	}
	@media(max-width: 576px){
		left: 50%;
		transform: translate(-50%,-50%);
	}
`;

export const Title = styled.h1`
	color: ${colors.title};
	font-size: 50px;
	font-weight: bold;
	text-align: center;
	margin-top: 35px;
	font-family: 'Oxygen', sans-serif;
	@media(max-width: 1200px){
		font-size: 35px;
	}
`;

export const BackDiv = styled.div`
	width: 100%;
	height: 350px;
	background-color: ${colors.primary};
	position: absolute;
	top: 50%;
	left: 0;
	z-index: -1;
	transform: skewY(-5deg);
`;