import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Card from 'src/bower/material-ui/packages/material-ui/src/Card';
import CardActionArea from 'src/bower/material-ui/packages/material-ui/src/CardActionArea';
import CardActions from 'src/bower/material-ui/packages/material-ui/src/CardActions';
import CardContent from 'src/bower/material-ui/packages/material-ui/src/CardContent';
import CardMedia from 'src/bower/material-ui/packages/material-ui/src/CardMedia';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
