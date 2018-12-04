import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Menu from 'src/bower/material-ui/packages/material-ui/src/Menu';
import MenuItem from 'src/bower/material-ui/packages/material-ui/src/MenuItem';
import Fade from 'src/bower/material-ui/packages/material-ui/src/Fade';

class FadeMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open with fade transition
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FadeMenu;
