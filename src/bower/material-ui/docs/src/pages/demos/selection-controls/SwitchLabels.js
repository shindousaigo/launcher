import React from 'react';
import FormGroup from 'src/bower/material-ui/packages/material-ui/src/FormGroup';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';

class SwitchLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
        <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />
      </FormGroup>
    );
  }
}

export default SwitchLabels;
