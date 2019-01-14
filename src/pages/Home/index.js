import React, { Component } from 'react';
import MaxContainer from '../../components/MaxContainer';

import { Image, Title, BackDiv } from './styles'; 

class Home extends Component {
  render() {
    return (
		<MaxContainer>
			<Image
				src={require('../../assets/products.png')}
			/>
			<Title>
				Products App
			</Title>
			<BackDiv/>
		</MaxContainer>
    );
  }
}

export default Home;