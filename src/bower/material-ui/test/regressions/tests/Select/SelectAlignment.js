import React from 'react';
import Input from 'src/bower/material-ui/packages/material-ui/src/Input';
import InputLabel from 'src/bower/material-ui/packages/material-ui/src/InputLabel';
import MenuItem from 'src/bower/material-ui/packages/material-ui/src/MenuItem';
import FormHelperText from 'src/bower/material-ui/packages/material-ui/src/FormHelperText';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import Select from 'src/bower/material-ui/packages/material-ui/src/Select';

function SelectAlignment() {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="age1">Age</InputLabel>
        <Select value="" input={<Input name="age1" id="age1" />}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="age2">year</InputLabel>
        <Select value={10} input={<Input name="year" id="age2" />}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input id="name-input" />
        <FormHelperText>Alignment with an input</FormHelperText>
      </FormControl>
    </div>
  );
}

export default SelectAlignment;
