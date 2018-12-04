import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

function OverridesProperties() {
  return (
    <MuiThemeProvider theme={theme}>
      <Button>Overrides properties</Button>
    </MuiThemeProvider>
  );
}

export default OverridesProperties;
