import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Popper from 'src/bower/material-ui/packages/material-ui/src/Popper';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Fade from 'src/bower/material-ui/packages/material-ui/src/Fade';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SimplePopper extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography className={classes.typography}>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

SimplePopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopper);
