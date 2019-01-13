import React, { Component } from 'react';

import { api } from '../../services';
import { b64toBlob } from '../../utils';
import Style from './styles';

class Home extends Component {

  state = {
  	name: 'asdadasd',
  	price: 300,
  	describe: 'asdasda'
  }

  async _handleSubmit(e){
  	e.preventDefault();
	let photo = document.querySelector("#photo").files[0];
	let formData = new FormData();
	formData.append('name',this.state.name);
	formData.append('price',this.state.price)
	formData.append('describe',this.state.price);
	formData.append('photo', photo);
	try{
		const response = await api.post('/products',formData);
		console.log(response);
		return
	}catch(error){
		console.log(error.response);
	}
  }

  async loadImage(){
	const response = await api.get('/products/5');
	const DOMURL = window.URL || window.webkitURL || window;
	let { photo,photo_type } = response.data.data;
	photo = b64toBlob(photo,photo_type);
	document.querySelector("img").src = DOMURL.createObjectURL(photo);
  }

  render() {
    return (
      <Style>
      	<form onSubmit={e => this._handleSubmit(e)} encType="multipart/form-data">
			<input type="text" onChange={e => {}} value={this.state.name}/>
			<br/><br/>
			<input type="number" onChange={e => {}} value={this.state.price}/>
			<br/><br/>
			<input type="text" onChange={e => {}} value={this.state.describe}/>
			<br/><br/>
			<input type="file" name="photo" id="photo"/>
			<br/><br/>
			<button>Enviar</button>
      	</form>
      	<br/><br/>
      	<img src=""/>
      	<button onClick={() => this.loadImage()}>
      		Carregar imagem
      	</button>
      </Style>
    );
  }
}

export default Home;