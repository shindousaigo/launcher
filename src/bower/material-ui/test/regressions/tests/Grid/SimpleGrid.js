import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';

const styles = {
  root: {
    width: 400,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
  },
};

function SimpleGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

SimpleGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrid);
