import React from 'react';
import FormLabel from 'src/bower/material-ui/packages/material-ui/src/FormLabel';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import FormGroup from 'src/bower/material-ui/packages/material-ui/src/FormGroup';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import FormHelperText from 'src/bower/material-ui/packages/material-ui/src/FormHelperText';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';

class SwitchesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.jason}
                onChange={this.handleChange('jason')}
                value="jason"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.antoine}
                onChange={this.handleChange('antoine')}
                value="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
