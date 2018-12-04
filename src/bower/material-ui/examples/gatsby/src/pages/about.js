/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import { Link } from 'gatsby';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display1" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subheading" gutterBottom>
        about page
      </Typography>
      <Typography gutterBottom>
        <Link to="/">Go to the main page</Link>
      </Typography>
      <Button variant="contained" color="primary">
        Do nothing button
      </Button>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(About));
