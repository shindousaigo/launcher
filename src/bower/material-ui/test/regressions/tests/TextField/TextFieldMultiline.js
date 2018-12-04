import React from 'react';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';

export default function TextFieldMultiline() {
  return <TextField label="Foo" multiline rows={4} value="Default text" />;
}
