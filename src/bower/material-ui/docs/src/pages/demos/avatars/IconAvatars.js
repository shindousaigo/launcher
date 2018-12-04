import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import pink from 'src/bower/material-ui/packages/material-ui/src/colors/pink';
import green from 'src/bower/material-ui/packages/material-ui/src/colors/green';
import Avatar from 'src/bower/material-ui/packages/material-ui/src/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
};

function IconAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.avatar}>
        <FolderIcon />
      </Avatar>
      <Avatar className={classes.pinkAvatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
    </Grid>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);
