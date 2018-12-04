import React from 'react';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';

export default function TextFieldRequired() {
  return (
    <div>
      <TextField required label="Foo" />
      <TextField required label="Foo" value="Hello world" />
    </div>
  );
}
