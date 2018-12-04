import blue from 'src/bower/material-ui/packages/material-ui/src/colors/blue';
import pink from 'src/bower/material-ui/packages/material-ui/src/colors/pink';
import { darken } from 'src/bower/material-ui/packages/material-ui/src/styles/colorManipulator';

const themeInitialState = {
  direction: 'ltr',
  paletteType: 'light',
  paletteColors: {
    primary: blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(pink.A400, 0.08),
    },
  },
};

export default themeInitialState;
