import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'src/bower/material-ui/packages/material-ui/src/Portal';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    border: '1px solid',
    borderColor: theme.palette.text.primary,
  },
});

class SimplePortal extends React.Component {
  state = {
    show: false,
  };

  handleClick = () => {
    this.setState(state => ({ show: !state.show }));
  };

  render() {
    const { classes } = this.props;
    const { show } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
        <div className={classes.alert}>
          <Typography>It looks like I will render here.</Typography>
          {show ? (
            <Portal container={this.container}>
              <Typography>But I actually render here!</Typography>
            </Portal>
          ) : null}
        </div>
        <div
          className={classes.alert}
          ref={ref => {
            this.container = ref;
          }}
        />
      </div>
    );
  }
}

SimplePortal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePortal);
