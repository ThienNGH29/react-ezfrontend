import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  sortValue: PropTypes.string.isRequired,
  onchange: PropTypes.func,
};

function ProductSort({ sortValue, onchange }) {
  const handleChange = (e, val) => {
    if (onchange) onchange(val);
  };

  return (
    <Tabs value={sortValue} onChange={handleChange} indicatorColor="primary" textColor="primary">
      <Tab label="Từ Thấp Đén Cao" value="salePrice:ASC"/>
      <Tab label="Từ Cao Đén Thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
