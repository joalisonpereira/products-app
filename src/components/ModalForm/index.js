import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, message } from 'antd';

import { storeProduct, editProduct } from '../../store/actions'; 
import { Divider } from './styles';

const INITIAL_STATE = {
	name: '',
	price: '',
	describe: ''
};

class ModalForm extends Component{

	state = INITIAL_STATE;

	_handleChange(e){
		const { name, value } = e.target;
		this.setState({
			[name]:value
		});
	}

	_handleSubmit(){
		const { name,price,describe } = this.state;
		const uploadPhoto = document.querySelector("#photo").files[0];

		//Validation
		if(name.length < 1 || price.length < 1 || describe.length < 1){
			return message.error("There should be no empty fields",1);
		}
		if(!this.props.data && !uploadPhoto){
			return message.error("You need to add a photo",1);
		}
		//Data
		let formData = new FormData();
		formData.append('name',this.state.name);
		formData.append('price',this.state.price)
		formData.append('describe',this.state.describe);
		formData.append('photo', uploadPhoto);

		//Submit
		let {data,editProduct,storeProduct} = this.props;
		if(data){
			formData.append('id', data.id);
			formData.append('_method','PUT');
			return editProduct(formData);
		}
		storeProduct(formData);
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
	  		}else{
	  			this.setState({...INITIAL_STATE});
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
				<form method="post" encType="multipart/form-data">
					<Input 
						name="name"
						placeholder="Name"
						value={this.state.name}
						onChange={e => this._handleChange(e)} 
					/>
					<Divider/>
					<Input 
						name="price"
						placeholder="9.999.999"
						type="number"
						addonBefore="R$"
						value={this.state.price}
						onChange={e => this._handleChange(e)} 
					/>
					<Divider/>
					<Input.TextArea
						name="describe"
						placeholder="Description your product"
						rows="4"
						value={this.state.describe}
						onChange={e => this._handleChange(e)} 
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
	storeProduct, editProduct
};

export default connect(null,mapDispatchToProps)(ModalForm);