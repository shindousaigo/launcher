import React from 'react';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Tooltip from 'src/bower/material-ui/packages/material-ui/src/Tooltip';
import ClickAwayListener from 'src/bower/material-ui/packages/material-ui/src/ClickAwayListener';

class TriggersTooltips extends React.Component {
  state = {
    open: false,
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableHoverListener title="Add">
              <Button>Focus or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={this.handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={this.handleTooltipClose}
                  open={this.state.open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <Button onClick={this.handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TriggersTooltips;
