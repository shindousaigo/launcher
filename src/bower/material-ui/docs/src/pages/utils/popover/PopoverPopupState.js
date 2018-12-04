import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Popover from 'src/bower/material-ui/packages/material-ui/src/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state/index';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

function PopoverPopupState(props) {
  const { classes } = props;

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>The content of the Popover.</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

PopoverPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PopoverPopupState);
