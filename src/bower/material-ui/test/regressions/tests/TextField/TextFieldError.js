import React from 'react';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';

export default function TextFieldError() {
  return (
    <div>
      <TextField error label="Foo" />
      <TextField error label="Foo" value="Hello world" />
    </div>
  );
}
