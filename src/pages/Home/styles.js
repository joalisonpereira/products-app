import styled from 'styled-components';
import { metrics, colors } from '../../styles';

export const BackDiv = styled.div`
	width: 100%;
	height: 400px;
	background-color: ${colors.primary};
	position: absolute;
	top: 50%;
	left: 0;
	z-index: -1;
	transform: skewY(-5deg);
`;