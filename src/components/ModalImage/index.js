import React from 'react';
import { Modal } from 'antd';

import { b64toBlob } from '../../utils';

class ModalImage extends React.Component{
	
	state = {
		decodeBlob: null
	}

	_decodeImage(){
		const DOMURL = window.URL || window.webkitURL || window;
		const { data } = this.props;
		const blob = b64toBlob(
			data.photo, data.photo_type
		);
		this.setState({
			decodeBlob: DOMURL.createObjectURL(blob)
		});
	}

  	componentDidMount(){
  		//this._decodeImage();
  	}

  	componentDidUpdate(prevProps,prevState){
  		if(prevProps.photo !== this.props.data.photo){
			//this._decodeImage();
  		}
  	}

	render(){
		const { data:{active}, onCancel } = this.props;
		return(
			<Modal 
				title="Imagem"
				visible={active}
				onCancel={onCancel} 
				footer={null}>
		      <img 
		      	src={this.state.decodeBlob} 
		      	alt="Product photo"
		      />
		    </Modal>
		);
	}
}

export default ModalImage;