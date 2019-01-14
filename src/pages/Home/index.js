import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MaxContainer from '../../components/MaxContainer';

import { BackDiv } from './styles'; 

class Home extends Component {
  render() {
    return (
		<MaxContainer>
			<BackDiv/>
		</MaxContainer>
    );
  }
}

export default Home;