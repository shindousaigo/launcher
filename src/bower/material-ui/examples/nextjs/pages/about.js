/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Link from 'next/link';

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
      <Typography variant="h4" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        about page
      </Typography>
      <Typography gutterBottom>
        <Link href="/">
          <a>Go to the main page</a>
        </Link>
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

export default withStyles(styles)(About);
