import React from 'react';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';

export default function SimpleListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <ListItem>
        <ListItemText primary="Primary" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
      <ListItem dense>
        <ListItemText primary="Primary" />
      </ListItem>
      <ListItem dense>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
      <ListItem selected>
        <ListItemText primary="Primary" />
      </ListItem>
    </div>
  );
}
