import React from 'react';
import PropTypes from 'prop-types';
import MenuList from 'src/bower/material-ui/packages/material-ui/src/MenuList';
import MenuItem from 'src/bower/material-ui/packages/material-ui/src/MenuItem';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import ListItemIcon from 'src/bower/material-ui/packages/material-ui/src/ListItemIcon';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const styles = {
  root: {
    width: 230,
  },
};

function TypographyMenu(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon />
          </ListItemIcon>
          <Typography variant="inherit">A very long text that overflows</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

TypographyMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyMenu);
