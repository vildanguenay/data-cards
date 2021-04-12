import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/paginationSlice';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'blue',
    '& > *': {
      marginTop: theme.spacing(2),
    },
    alignSelf: 'center',
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
        page={currentPage}
        onChange={countPage}
        count={8}
        variant="outlined"
        shape="rounded"
        size="small"
      />
    </div>
  );
}
