import React from 'react';

import { styles } from './styles';

export const columns = [
  {
      title: '#',
      dataIndex: 'id',
      key: 'id'
  },
  {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
  },
  {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
  }, 
  {
      title: 'Description',
      dataIndex: 'describe',
      key: 'describe',
      render: text => (
        <p style={styles.describeColumn}>
          { text }
        </p>
      )
  }
];