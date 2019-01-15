import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, message } from 'antd';

import { storeProduct } from '../../store/actions'; 
import { Divider } from './styles';

class ModalForm extends Component{

	state = {
		title: 'Add Product',
		name: '',
		price: '',
		describe: ''
	}

	_handleChange(e){
		const { name, value } = e.target;
		this.setState({
			[name]:value
		});
	}

	_handleSubmit(){
		const { name,price,describe } = this.state;
		const photo = document.querySelector("#photo").files[0];
		//Validation
		if(name.length < 1 || price.length < 1 || describe.length < 1){
			return message.error("There should be no empty fields",1);
		}
		//Submit
		let formData = new FormData();
		formData.append('name',this.state.name);
		formData.append('price',this.state.price)
		formData.append('describe',this.state.price);
		formData.append('photo', photo);
		this.props.storeProduct(formData);
	}

	componentDidUpdate(prevProps,prevState){
		const { active, data } = this.props;
		if(prevProps.active !== active){
	  		if(this.props.active){
		  		this.setState({
		  			...this.state,
		  			...data,
		  			title: data ? 'Update product' : 'Add Product'
		  		});
	  		}
  		}
	}

	render(){
		const { active, onCancel } = this.props;
		return(
			<Modal
				title={this.state.title}
				okText="Send"
				onOk={() => this._handleSubmit()} 
				onCancel={onCancel}
				visible={active}>
				<form method="post">
					<Input 
						name="name"
						placeholder="Name"
						value={this.state.name}
						onChange={e => this._handleChange(e)} 
						onBlur={e => console.log(e)}
					/>
					<Divider/>
					<Input 
						name="price"
						placeholder="9.999.999"
						type="number"
						addonBefore="R$"
						value={this.state.price}
						onChange={e => this._handleChange(e)} 
						onBlur={e => console.log(e)}
					/>
					<Divider/>
					<Input.TextArea
						name="describe"
						placeholder="Description your product"
						rows="4"
						value={this.state.describe}
						onChange={e => this._handleChange(e)} 
						onBlur={e => console.log(e)}
					/>
					<Divider/>
					<input 
						name="photo"
						type="file"
						id="photo"
					/>
					<Divider/>
				</form>
			</Modal>
		);
	}
}

const mapDispatchToProps = {
	storeProduct
};

export default connect(null,mapDispatchToProps)(ModalForm);