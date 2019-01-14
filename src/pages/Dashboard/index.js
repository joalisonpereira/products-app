import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import MaxContainer from '../../components/MaxContainer';
import Table from '../../components/Table';
import { loadProducts } from '../../store/actions';
import { styles } from './styles';

class Dashboard extends Component {
  componentDidMount(){
  	this.props.loadProducts();
  }
  render() {
  	const { data, loading } = this.props.products;
    return (
      <MaxContainer>
      	{
  			  loading ?
  				  <Icon type="loading" style={styles.loadingIcon}/>
  			  :
  				  <Table 
              data={data}
              deleteAction={()=>{}}
            />
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