import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import AppBar from 'src/bower/material-ui/packages/material-ui/src/AppBar';
import Tabs from 'src/bower/material-ui/packages/material-ui/src/Tabs';
import Tab from 'src/bower/material-ui/packages/material-ui/src/Tab';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class TabsWrappedLabel extends React.Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 'one' && <TabContainer>Item One</TabContainer>}
        {value === 'two' && <TabContainer>Item Two</TabContainer>}
        {value === 'three' && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsWrappedLabel);
