import styled from 'styled-components';
import { metrics } from '../../styles';

export const WrapperImage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	max-width: 100%;
	object-fit: cover;
	margin:0 auto;
	padding: ${metrics.mediumMargin} 0;
`;