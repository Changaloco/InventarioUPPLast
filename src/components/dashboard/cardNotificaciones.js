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

export default function CardNotificaciones() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href="/" >
        <CardMedia
          className={classes.media}
          image="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png"
          title="Reportes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Reportes
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
  );
}