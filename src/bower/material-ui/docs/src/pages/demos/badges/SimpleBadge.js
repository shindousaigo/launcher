import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Badge from 'src/bower/material-ui/packages/material-ui/src/Badge';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from 'src/bower/material-ui/packages/material-ui/src/AppBar';
import Tabs from 'src/bower/material-ui/packages/material-ui/src/Tabs';
import Tab from 'src/bower/material-ui/packages/material-ui/src/Tab';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

function SimpleBadge(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <IconButton aria-label="4 pending messages" className={classes.margin}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
      </div>
      <AppBar position="static" className={classes.margin}>
        <Tabs value={0}>
          <Tab
            label={
              <Badge className={classes.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            }
          />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Typography className={classes.padding}>Typography</Typography>
      </Badge>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Button variant="contained">Button</Button>
      </Badge>
    </div>
  );
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBadge);
