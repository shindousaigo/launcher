import React from 'react';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Tabs from 'src/bower/material-ui/packages/material-ui/src/Tabs';
import Tab from 'src/bower/material-ui/packages/material-ui/src/Tab';

class DisabledTabs extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Paper>
    );
  }
}

export default DisabledTabs;
