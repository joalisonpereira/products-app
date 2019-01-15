import styled from 'styled-components';
import { metrics } from '../../styles';

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
