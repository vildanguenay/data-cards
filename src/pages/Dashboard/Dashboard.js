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
  cardsContainer: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Welcome to the Dashboard!</h1>
      <h2 className={classes.title2}>Subscribers' data:</h2>
      <div className={classes.cardsContainer}>
        <Card />
      </div>
      <Pagination />
    </div>
  );
}
