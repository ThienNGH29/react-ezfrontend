import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `solid 1px ${theme.palette.grey[300]}`,
  },

  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',

    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    '& > span': {
      margin: `0 ${theme.spacing(1)}px`
    }
  },
}))

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if(onChange) onChange(values)

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    })
  }
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" onChange={handleChange} value={values.salePrice_gte} />
        <span>-</span>
        <TextField name="salePrice_lte" onChange={handleChange} value={values.salePrice_lte} />
      </Box>

      <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>
        ÁP DỤNG
      </Button>
    </Box>
  );
}

export default FilterByPrice;
