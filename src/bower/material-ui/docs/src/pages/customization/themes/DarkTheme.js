import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';
import WithTheme from './WithTheme';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: {
    useNextVariants: true,
  },
});

function DarkTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <WithTheme />
    </MuiThemeProvider>
  );
}

export default DarkTheme;
