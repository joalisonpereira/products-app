import React, { Component } from 'react';
import imageToBlob from 'image-to-blob';

import { api } from '../../services';
import Style from './styles';

class Home extends Component {
  
  state = {
  	src : '',
  	src2 : ''
  }

  _onChangeImage(e){
  	let { files } = e.target;
  	let reader = new FileReader();
    reader.addEventListener("load", e => {
		this.setState({
			src: e.target.result
		})
    });	
    reader.readAsDataURL(files[0]);
  }

  _consoleBlob(){
  	let img = document.querySelector("#img1");
  	let DOMURL = window.URL || window.webkitURL || window;
  	imageToBlob(img,(error,blob) => {
  		if(error) return;
		this.setState({
			src2: DOMURL.createObjectURL(blob)
		})
  	});
  }

  render() {
    return (
      <Style>
      	<h1>Home</h1>
      	<img src={this.state.src} id="img1" style={{width:300}}/>
      	<img src={this.state.src2} id="img2" style={{width:200}}/>
      	<input type="file" onChange={e => this._onChangeImage(e)}/>
      	<br/><br/>
      	<button onClick={() => this._consoleBlob()}>
      		Get blob
      	</button>
      </Style>
    );
  }
}

export default Home;