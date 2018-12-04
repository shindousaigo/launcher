import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import AppBar from 'src/bower/material-ui/packages/material-ui/src/AppBar';
import Tabs from 'src/bower/material-ui/packages/material-ui/src/Tabs';
import NoSsr from 'src/bower/material-ui/packages/material-ui/src/NoSsr';
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

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs fullWidth value={value} onChange={this.handleChange}>
              <LinkTab label="Page One" href="page1" />
              <LinkTab label="Page Two" href="page2" />
              <LinkTab label="Page Three" href="page3" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Page One</TabContainer>}
          {value === 1 && <TabContainer>Page Two</TabContainer>}
          {value === 2 && <TabContainer>Page Three</TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
