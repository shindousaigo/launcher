import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemIcon from 'src/bower/material-ui/packages/material-ui/src/ListItemIcon';
import ListItemSecondaryAction from 'src/bower/material-ui/packages/material-ui/src/ListItemSecondaryAction';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import ListSubheader from 'src/bower/material-ui/packages/material-ui/src/ListSubheader';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SwitchListSecondary extends React.Component {
  state = {
    checked: ['wifi'],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('wifi')}
              checked={this.state.checked.indexOf('wifi') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('bluetooth')}
              checked={this.state.checked.indexOf('bluetooth') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

SwitchListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchListSecondary);
