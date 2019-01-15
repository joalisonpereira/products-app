import React, { Component } from 'react';
import { Spin, message, Icon } from 'antd';
import { connect } from 'react-redux';

import MaxContainer from '../../components/MaxContainer';
import Table from '../../components/Table';
import { loadProducts } from '../../store/actions';
import { styles, AddButton } from './styles';

class Dashboard extends Component {

  componentDidUpdate(prevProps,prevState){
    let { deleteStatus } = this.props.products;
    if(prevProps.deleteStatus !== deleteStatus){
      if(deleteStatus){
        message.success('Product successfully removed');
        this.props.loadProducts();
      }
    }
  }

  componentDidMount(){
  	this.props.loadProducts();
  }

  render() {
  	const { data, loading } = this.props.products;
    return (
      <MaxContainer>
      	{
  			  loading ?
  				  <Spin style={styles.spin}/>
  			  :
  				  <div>
              <Table data={data}/>
              <AddButton>
                <Icon type="plus"/>
              </AddButton>
            </div>
        }
      </MaxContainer>
    );
  }
}

const mapStateToProps = ({products}) => ({products});

const mapDispatchToProps = {
	loadProducts
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);