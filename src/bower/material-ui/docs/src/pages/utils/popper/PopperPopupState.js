import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Popper from 'src/bower/material-ui/packages/material-ui/src/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state/index';
import Fade from 'src/bower/material-ui/packages/material-ui/src/Fade';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

function PopperPopupState(props) {
  const { classes } = props;

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {popupState => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)}>
            Toggle Popper
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography className={classes.typography}>The content of the Popper.</Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}

PopperPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PopperPopupState);
