import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';
import Avatar from 'src/bower/material-ui/packages/material-ui/src/Avatar';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
});

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
