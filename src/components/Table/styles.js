import styled from 'styled-components';
import { metrics } from '../../styles';

export const styles = {
	warningIcon: {
		color: 'red'
	}
};

export const WrapperFormIcon = styled.a`
	font-size: 20px;
`;

export const WrapperDeleteIcon = styled.a`
	font-size: 20px;
	margin-left: ${metrics.mediumMargin};
	@media(max-width: 510px){
		margin-left: 0px;
	}
`;