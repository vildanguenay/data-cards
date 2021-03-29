import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/paginationSlice';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination);

  const countPage = (event, newPage) => {
    if (newPage > currentPage) {
      console.log('page');
      return dispatch(increment(newPage));
    }
    return dispatch(decrement(newPage));
  };

  return (
    <div className={classes.root}>
      <Pagination
        page={currentPage}
        onChange={countPage}
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}
