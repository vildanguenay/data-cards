import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/counter/subscribersSlice';

import Dialog from '../Dialog/Dialog';

import CardUI from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardAction from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    justifyContent: 'center',
  },
  layout: {
    // width: '100%',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      width: '25%',
      margin: theme.spacing(1),
    },
  },
}));

export default function Card() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const subscribersData = useSelector((state) => state.data);
  const currentPage = useSelector((state) => state.pagination);
  const beginPaginationFrom0 = currentPage - 1;

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      {subscribersData
        .slice(beginPaginationFrom0 * 7, beginPaginationFrom0 * 7 + 7)
        .map((card) => (
          <CardUI key={card.id} className={classes.layout}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="image"
                height="130"
                image={card.avatar}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  id: {card.id}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  country: {card.country}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  city: {card.city}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  address: {card.address}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardAction className={classes.root}>
              <Dialog card={card} />
            </CardAction>
          </CardUI>
        ))}
    </>
  );
}
