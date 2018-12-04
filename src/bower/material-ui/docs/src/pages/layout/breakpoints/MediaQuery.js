import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import green from 'src/bower/material-ui/packages/material-ui/src/colors/green';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
});

function MediaQuery(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">{'down(sm): red'}</Typography>
      <Typography variant="subtitle1">{'up(md): blue'}</Typography>
      <Typography variant="subtitle1">{'up(lg): green'}</Typography>
    </div>
  );
}

MediaQuery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaQuery);
