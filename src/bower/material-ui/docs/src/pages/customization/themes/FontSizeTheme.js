import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true,
  },
});

function FontSizeTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography>body1</Typography>
    </MuiThemeProvider>
  );
}

export default FontSizeTheme;
