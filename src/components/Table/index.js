import React from 'react';
import { Table,Popconfirm, Icon } from 'antd';
import { connect } from 'react-redux';

import ModalImage from '../../components/ModalImage';
import ModalForm from '../../components/ModalForm';
import { columns } from './config';
import { b64toBlob } from '../../utils';
import { styles, FormIconWrapper } from './styles';
import { deleteProduct } from '../../store/actions';

class MyTable extends React.Component{

  state = {
    modalImage:{
      active: false,
      data: null
    },
    modalForm:{
      active: false,
      data: null
    }
  }

  _toggleModalImage({photo,photo_type}){
    const { modalImage } = this.state;
    this.setState({
      ...this.state,
      modalImage:{
        active: !modalImage.active,
        data: {
          photo,
          photo_type
        }
      }
    });
  }

  _toggleModalForm(product){
    const { modalForm } = this.state;
  }

  _toggleModalClose(name){
    this.setState({
      ...this.state,
      [name]:{
        ...this.state[name],
        active: false
      }
    });
  }

  _actionsColumns(){
    const { deleteProduct } = this.props;
    return {
      title: '',
      key: 'action',
      render: product => (
        <span>
          <a 
            href="#" 
            style={styles.simpleIcon} 
            onClick={() => this._toggleModalImage(product)}>
            <Icon type="picture"/>
          </a>
          <FormIconWrapper 
            onClick={() => this._toggleModalForm(product)}
          >
            <Icon type="form"/>
          </FormIconWrapper>
          <a href="#" style={styles.simpleIcon}> 
            <Popconfirm
                title="Remove this product?"
                onConfirm={() => deleteProduct(product.id)}
                icon={
                  <Icon type="warning" style={styles.warningIcon}/>
                }>
              <Icon type="delete"/>
            </Popconfirm>
          </a>
        </span>
      ),
    }
  }

  render(){
    const { data } = this.props;
    return(
      <div>
        <Table
          columns={columns.concat(this._actionsColumns())} 
          dataSource={
            data.map(item => ({...item, key: item.id}))
          }
        />
        <ModalImage 
          data={this.state.modalImage}
          onCancel={() => this._toggleModalClose("modalImage")}
        />
        <ModalForm
          data={this.state.modalForm}
          onCancel={() => this._toggleModalClose("modalForm")}
        /> 
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteProduct
};

export default connect(null,mapDispatchToProps)(MyTable);
