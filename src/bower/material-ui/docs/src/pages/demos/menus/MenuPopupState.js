/* eslint-disable react/jsx-handler-names */

import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Menu from 'src/bower/material-ui/packages/material-ui/src/Menu';
import MenuItem from 'src/bower/material-ui/packages/material-ui/src/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';

function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Cake</MenuItem>
            <MenuItem onClick={popupState.close}>Death</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default MenuPopupState;
