// @flow

import React from 'react';
import type { ComponentType } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';
import purple from 'src/bower/material-ui/packages/material-ui/src/colors/purple';
import green from 'src/bower/material-ui/packages/material-ui/src/colors/green';
import CssBaseline from 'src/bower/material-ui/packages/material-ui/src/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function withRoot(Component: ComponentType<*>) {
  function WithRoot(props: Object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
