import React, { Component } from 'react';
import MaxContainer from '../../components/MaxContainer';
import FadeIn from 'react-fade-in';

import { Image, Title, BackDiv } from './styles'; 

class Home extends Component {
  render() {
    return (
		<MaxContainer fadeIn={false}>
			<Image
				src={require('../../assets/products.png')}
				alt="Products"
			/>
			<FadeIn>
				<Title>Products App</Title>
			</FadeIn>
			<BackDiv/>
		</MaxContainer>
    );
  }
}

export default Home;