import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/counter/subscribersSlice';

import CardUI from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {
      maxWidth: 345,
    },
  },
  []
);

export default function Card() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const subscribersData = useSelector((state) => state.data);
  console.log(subscribersData);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      {subscribersData.map((card) => (
        <CardUI key={card.id} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardUI>
      ))}
    </>
  );
}
