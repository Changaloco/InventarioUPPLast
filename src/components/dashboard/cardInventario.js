import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href="/" >
        <CardMedia
          className={classes.media}
          image="https://www.nusystem.com/wp-content/uploads/2014/06/port_inventario_ico_300x300.png"
          title="Inventario"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Inventario
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
  );
}