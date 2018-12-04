import React from 'react';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import RadioGroup from 'src/bower/material-ui/packages/material-ui/src/RadioGroup';
import Radio from 'src/bower/material-ui/packages/material-ui/src/Radio';

export default function SimpleRadioGroup() {
  return (
    <div style={{ width: 100 }}>
      <RadioGroup value="home">
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
    </div>
  );
}
