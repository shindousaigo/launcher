import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import LinearProgress from 'src/bower/material-ui/packages/material-ui/src/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function LinearIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);
