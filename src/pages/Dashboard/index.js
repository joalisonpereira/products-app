import React, { Component } from 'react';
import { Spin, message } from 'antd';
import { connect } from 'react-redux';

import MaxContainer from '../../components/MaxContainer';
import Table from '../../components/Table';
import { loadProducts } from '../../store/actions';
import { styles } from './styles';

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
  	const { data, loading, deleteStatus } = this.props.products;
    return (
      <MaxContainer>
      	{
  			  loading ?
  				  <Spin style={styles.spin}/>
  			  :
  				  <Table data={data}/>
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