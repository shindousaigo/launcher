import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemSecondaryAction from 'src/bower/material-ui/packages/material-ui/src/ListItemSecondaryAction';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import ListItemAvatar from 'src/bower/material-ui/packages/material-ui/src/ListItemAvatar';
import Checkbox from 'src/bower/material-ui/packages/material-ui/src/Checkbox';
import Avatar from 'src/bower/material-ui/packages/material-ui/src/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
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
      <List dense className={classes.root}>
        {[0, 1, 2, 3].map(value => (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value)}
                checked={this.state.checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);
