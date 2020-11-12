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

export default function CardUsuario() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href="/" >
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_user_icon-01.svg/1063px-New_user_icon-01.svg.png"
          title="Administracion Usuario"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Administracion Usuario
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
  );
}