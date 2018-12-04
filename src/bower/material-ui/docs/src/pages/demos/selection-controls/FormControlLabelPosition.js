import React from 'react';
import Radio from 'src/bower/material-ui/packages/material-ui/src/Radio';
import RadioGroup from 'src/bower/material-ui/packages/material-ui/src/RadioGroup';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import FormLabel from 'src/bower/material-ui/packages/material-ui/src/FormLabel';

class FormControlLabelPosition extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">labelPlacement</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Radio color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default FormControlLabelPosition;
