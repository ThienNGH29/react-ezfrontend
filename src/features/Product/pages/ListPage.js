import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 10,
    limit: 8,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 8,
    _sort: 'salePrice:ASC'
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        setProductList(data);
        setPagination(pagination);
        console.log({ data, pagination });
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
      setLoading(false);
    })();
  }, [filter]);

  const handlePageChange = (e, page) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortVal) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      _sort: newSortVal,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>lef col</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort sortValue={filter._sort} onchange={handleSortChange}/>
              {loading ? <ProductSkeletonList length={8} /> : <ProductList data={productList} />}

              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
