import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import Avatar from 'src/bower/material-ui/packages/material-ui/src/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from 'src/bower/material-ui/packages/material-ui/src/Divider';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  },
});

function SubheaderDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography className={classes.dividerFullWidth} color="textSecondary" variant="caption">
          Divider
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography className={classes.dividerInset} color="textSecondary" variant="caption">
          Leisure
        </Typography>
      </li>
      <ListItem>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}

SubheaderDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubheaderDividers);
