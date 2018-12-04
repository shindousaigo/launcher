import React from 'react';
import FormLabel from 'src/bower/material-ui/packages/material-ui/src/FormLabel';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import RadioGroup from 'src/bower/material-ui/packages/material-ui/src/RadioGroup';
import Radio from 'src/bower/material-ui/packages/material-ui/src/Radio';

export default function RadioGroupWithLabel() {
  return (
    <FormControl style={{ width: 100 }}>
      <FormLabel>Location</FormLabel>
      <RadioGroup value="home">
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
    </FormControl>
  );
}
