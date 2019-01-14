import React from 'react';
import { Table,Popconfirm, Icon } from 'antd';
import { columns } from './config';
import { 
  styles,
  WrapperFormIcon,
  WrapperDeleteIcon } from './styles';

class MyTable extends React.Component{

  _actionsColumns(){
    return {
      title: '',
      key: 'action',
      render: (product) => (
        <span>
          <WrapperFormIcon href="#">
            <Icon type="form"/>
          </WrapperFormIcon>
          <WrapperDeleteIcon href="#">
            <Popconfirm
                title="Remove this product?"
                onConfirm={() => alert(product.id)}
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

export default MyTable;
