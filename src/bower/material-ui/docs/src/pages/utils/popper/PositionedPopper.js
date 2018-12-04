import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Popper from 'src/bower/material-ui/packages/material-ui/src/Popper';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Fade from 'src/bower/material-ui/packages/material-ui/src/Fade';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';

const styles = theme => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class PositionedPopper extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    placement: null,
  };

  handleClick = placement => event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: state.placement !== placement || !state.open,
      placement,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open, placement } = this.state;

    return (
      <div className={classes.root}>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography className={classes.typography}>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Grid container justify="center">
          <Grid item>
            <Button onClick={this.handleClick('top-start')}>top-start</Button>
            <Button onClick={this.handleClick('top')}>top</Button>
            <Button onClick={this.handleClick('top-end')}>top-end</Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Button onClick={this.handleClick('left-start')}>left-start</Button>
            <br />
            <Button onClick={this.handleClick('left')}>left</Button>
            <br />
            <Button onClick={this.handleClick('left-end')}>left-end</Button>
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column" spacing={0}>
            <Grid item>
              <Button onClick={this.handleClick('right-start')}>right-start</Button>
            </Grid>
            <Grid item>
              <Button onClick={this.handleClick('right')}>right</Button>
            </Grid>
            <Grid item>
              <Button onClick={this.handleClick('right-end')}>right-end</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Button onClick={this.handleClick('bottom-start')}>bottom-start</Button>
            <Button onClick={this.handleClick('bottom')}>bottom</Button>
            <Button onClick={this.handleClick('bottom-end')}>bottom-end</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

PositionedPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedPopper);
