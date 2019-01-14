import React from 'react';
import { Table,Popconfirm, Icon } from 'antd';
import { connect } from 'react-redux';

import { columns } from './config';
import { styles, WrapperFormIcon, WrapperDeleteIcon } from './styles';
import { deleteProduct } from '../../store/actions';

class MyTable extends React.Component{

  _actionsColumns(){
    const { deleteProduct } = this.props;
    return {
      title: '',
      key: 'action',
      render: (product) => (
        <span>
          <WrapperFormIcon>
            <Icon type="form"/>
          </WrapperFormIcon>
          <WrapperDeleteIcon>
            <Popconfirm
                title="Remove this product?"
                onConfirm={() => deleteProduct(product.id)}
                icon={
                  <Icon type="warning" style={styles.warningIcon}/>
                }>
              <Icon type="delete"/>
            </Popconfirm>
          </WrapperDeleteIcon>
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
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteProduct
};

export default connect(null,mapDispatchToProps)(MyTable);
