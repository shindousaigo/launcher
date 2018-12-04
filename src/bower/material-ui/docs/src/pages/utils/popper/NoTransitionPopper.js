import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Popper from 'src/bower/material-ui/packages/material-ui/src/Popper';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class NoTransitionPopper extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: state.anchorEl ? null : currentTarget,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'no-transition-popper' : null;

    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper>
            <Typography className={classes.typography}>The content of the Popper.</Typography>
          </Paper>
        </Popper>
      </div>
    );
  }
}

NoTransitionPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoTransitionPopper);
