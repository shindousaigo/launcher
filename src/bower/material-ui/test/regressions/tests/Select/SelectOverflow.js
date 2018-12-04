import React from 'react';
import MenuItem from 'src/bower/material-ui/packages/material-ui/src/MenuItem';
import Select from 'src/bower/material-ui/packages/material-ui/src/Select';

function SelectOverflow() {
  return (
    <Select value={10} style={{ maxWidth: 100 }}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Tennnnnnn</MenuItem>
    </Select>
  );
}

export default SelectOverflow;
