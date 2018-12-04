import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemIcon from 'src/bower/material-ui/packages/material-ui/src/ListItemIcon';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetList(props) {
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText inset primary="Chelsea Otakan" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="Eric Hoffman" />
      </ListItem>
    </List>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);
