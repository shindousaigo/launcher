import React from 'react';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import ListItemSecondaryAction from 'src/bower/material-ui/packages/material-ui/src/ListItemSecondaryAction';
import Checkbox from 'src/bower/material-ui/packages/material-ui/src/Checkbox';

export default function SecondaryActionCheckboxListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button dense>
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button selected>
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}
