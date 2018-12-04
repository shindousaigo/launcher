import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Badge from 'src/bower/material-ui/packages/material-ui/src/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';
import FormGroup from 'src/bower/material-ui/packages/material-ui/src/FormGroup';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class BadgeVisibility extends Component {
  state = {
    invisible: false,
  };

  handleBadgeVisibility = () => {
    this.setState(prevState => ({ invisible: !prevState.invisible }));
  };

  render() {
    const { classes } = this.props;
    const { invisible } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.margin}>
          <Badge color="secondary" badgeContent={4} invisible={invisible}>
            <MailIcon />
          </Badge>
        </div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch color="primary" checked={!invisible} onChange={this.handleBadgeVisibility} />
            }
            label="Show Badge"
          />
        </FormGroup>
      </div>
    );
  }
}

BadgeVisibility.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BadgeVisibility);
