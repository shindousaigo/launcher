import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';
import purple from 'src/bower/material-ui/packages/material-ui/src/colors/purple';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

function Palette() {
  return (
    <MuiThemeProvider theme={theme}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </MuiThemeProvider>
  );
}

export default Palette;
