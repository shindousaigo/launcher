import React from 'react';
import Avatar from 'src/bower/material-ui/packages/material-ui/src/Avatar';
import Icon from 'src/bower/material-ui/packages/material-ui/src/Icon';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';

export default function AvatarListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <ListItem>
        <Avatar>
          <Icon>folder</Icon>
        </Avatar>
        <ListItemText primary="Avatar" />
      </ListItem>
      <ListItem>
        <Avatar>
          <Icon>folder</Icon>
        </Avatar>
        <ListItemText primary="Avatar" secondary="Secondary" />
      </ListItem>
      <List dense>
        <ListItem>
          <Avatar>
            <Icon>folder</Icon>
          </Avatar>
          <ListItemText primary="Avatar" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Icon>folder</Icon>
          </Avatar>
          <ListItemText primary="Avatar" secondary="Secondary" />
        </ListItem>
      </List>
    </div>
  );
}
