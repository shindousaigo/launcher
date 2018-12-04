import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';
import Hidden from 'src/bower/material-ui/packages/material-ui/src/Hidden';
import withWidth from 'src/bower/material-ui/packages/material-ui/src/withWidth';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function GridIntegration(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        Current width: {props.width}
      </Typography>
      <Grid container spacing={24}>
        <Hidden xsUp>
          <Grid item xs>
            <Paper className={classes.paper}>xsUp</Paper>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs>
            <Paper className={classes.paper}>smUp</Paper>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs>
            <Paper className={classes.paper}>mdUp</Paper>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs>
            <Paper className={classes.paper}>lgUp</Paper>
          </Grid>
        </Hidden>
        <Hidden xlUp>
          <Grid item xs>
            <Paper className={classes.paper}>xlUp</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

GridIntegration.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(GridIntegration);
