import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Tabs from 'src/bower/material-ui/packages/material-ui/src/Tabs';
import Tab from 'src/bower/material-ui/packages/material-ui/src/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
};

class IconLabelTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<PhoneIcon />} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
      </Paper>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);
