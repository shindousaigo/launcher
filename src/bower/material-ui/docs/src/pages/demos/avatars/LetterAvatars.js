import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Avatar from 'src/bower/material-ui/packages/material-ui/src/Avatar';
import deepOrange from 'src/bower/material-ui/packages/material-ui/src/colors/deepOrange';
import deepPurple from 'src/bower/material-ui/packages/material-ui/src/colors/deepPurple';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.avatar}>H</Avatar>
      <Avatar className={classes.orangeAvatar}>N</Avatar>
      <Avatar className={classes.purpleAvatar}>OP</Avatar>
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);
