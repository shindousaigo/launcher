import React from 'react';
import Icon from 'src/bower/material-ui/packages/material-ui/src/Icon';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import ListItemIcon from 'src/bower/material-ui/packages/material-ui/src/ListItemIcon';

export default function IconListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <ListItem>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
      <ListItem>
        <ListItemText inset primary="Inset" secondary="Secondary" />
      </ListItem>
      <ListItem dense>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
      <ListItem dense>
        <ListItemText inset primary="Inset" secondary="Secondary" />
      </ListItem>
      <ListItem selected>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
    </div>
  );
}
