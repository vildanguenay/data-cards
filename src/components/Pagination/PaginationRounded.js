import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/paginationSlice';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

// import clsx from 'clsx';
import './PaginationRounded.css';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'blue',
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination);

  const countPage = (event, pageSelected) => {
    if (pageSelected > currentPage) {
      return dispatch(increment(pageSelected));
    } else if (pageSelected < currentPage) {
      return dispatch(decrement(pageSelected));
    }
  };

  return (
    <div className={classes.root}>
      <Pagination
        page
        onChange={countPage}
        count={5}
        variant="outlined"
        shape="rounded"
        size="small"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
}
