import React from 'react';

import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/PaginationRounded';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title2: {
    marginTop: 'unset',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Welcome to the Dashboard!</h1>
      <h2 className={classes.title2}>Subscribers' data:</h2>
      <Card />
      <Pagination />
    </div>
  );
}
