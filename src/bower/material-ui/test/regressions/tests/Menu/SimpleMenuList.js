import React from 'react';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import MenuList from 'src/bower/material-ui/packages/material-ui/src/MenuList';
import MenuItem from 'src/bower/material-ui/packages/material-ui/src/MenuItem';

export default function SimpleMenuList() {
  return (
    <Paper elevation={8}>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem selected>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Paper>
  );
}
