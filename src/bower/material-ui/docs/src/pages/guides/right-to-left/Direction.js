import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function Direction() {
  return (
    <MuiThemeProvider theme={theme}>
      <div dir="rtl">
        <TextField placeholder="Name" />
        <input type="text" placeholder="Name" />
      </div>
    </MuiThemeProvider>
  );
}

export default Direction;
