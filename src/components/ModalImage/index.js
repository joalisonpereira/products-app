import React from 'react';
import { Modal } from 'antd';

import { b64toBlob } from '../../utils';
import { WrapperImage, Image } from './styles';

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

  	componentDidUpdate(prevProps,prevState){
  		if(prevProps.active !== this.props.active){
	  		if(this.props.active){
		  		this._decodeImage();
	  		}
  		}
  	}

	render(){
		const { active, onCancel } = this.props;
		return(
			<Modal 
				visible={active}
				onCancel={onCancel} 
				footer={null}>
		      <WrapperImage>
		      	<Image
					src={this.state.decodeBlob}
			      	alt="Product photo"
			      />
		      </WrapperImage>
		    </Modal>
		);
	}
}

export default ModalImage;