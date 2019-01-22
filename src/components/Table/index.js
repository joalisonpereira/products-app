import React from 'react';
import { Table,Popconfirm, Icon } from 'antd';
import { connect } from 'react-redux';

import ModalImage from '../../components/ModalImage';
import ModalForm from '../../components/ModalForm';
import { columns } from './config';
import { styles, AddButton, FormIconWrapper } from './styles';
import { deleteProduct } from '../../store/actions';

class MyTable extends React.Component{

  state = {
    modalImage:{
      active: false,
      data: null
    },
    modalForm:{
      active: false,
      data: null,
    }
  }

  _toggleModalImage({photo,photo_type}){
    this.setState({
      ...this.state,
      modalImage: {
        active: true,
        data: {
          photo,
          photo_type
        }
      }
    });
  }

  _toggleModalForm(product=null){
    this.setState({
      ...this.state,
      modalForm: {
        active: true,
        data: product
      }
    });
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
      title: 'Actions',
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
            onClick={() => this._toggleModalForm(product)}>
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
    const { modalImage, modalForm } = this.state;
    return(
      <div>
        <Table
          columns={columns.concat(this._actionsColumns())}
          dataSource={
            data.map(item => ({...item, key: item.id}))
          }
        />
        <ModalImage
          active={modalImage.active}
          data={modalImage.data}
          onCancel={() => this._toggleModalClose("modalImage")}
        />
        <ModalForm
          active={modalForm.active}
          data={modalForm.data}
          onCancel={() => this._toggleModalClose("modalForm")}
        />
        <AddButton onClick={() => this._toggleModalForm()}>
          <Icon type="plus"/>
        </AddButton> 
      </div>
    );
  }
}

const mapDispatchToProps = {deleteProduct};

export default connect(null,mapDispatchToProps)(MyTable);
