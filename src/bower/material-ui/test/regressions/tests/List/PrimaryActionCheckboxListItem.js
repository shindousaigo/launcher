import React from 'react';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import ListItemSecondaryAction from 'src/bower/material-ui/packages/material-ui/src/ListItemSecondaryAction';
import Checkbox from 'src/bower/material-ui/packages/material-ui/src/Checkbox';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import Icon from 'src/bower/material-ui/packages/material-ui/src/Icon';

export default function PrimaryActionCheckboxListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <List>
        <ListItem button>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <IconButton>
              <Icon>comment</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button dense>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <IconButton>
              <Icon>comment</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button selected>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <IconButton>
              <Icon>comment</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}
