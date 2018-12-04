import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'src/bower/material-ui/packages/material-ui/src/Checkbox';
import { createMuiTheme, MuiThemeProvider, withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import orange from 'src/bower/material-ui/packages/material-ui/src/colors/orange';

const styles = theme => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
});

let CustomCheckbox = props => (
  <Checkbox
    defaultChecked
    classes={{
      root: props.classes.root,
      checked: props.classes.checked,
    }}
  />
);

CustomCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

CustomCheckbox = withStyles(styles)(CustomCheckbox);

const theme = createMuiTheme({
  status: {
    // My business variables
    danger: orange[500],
  },
});

function CustomStyles() {
  return (
    <MuiThemeProvider theme={theme}>
      <CustomCheckbox />
    </MuiThemeProvider>
  );
}

export default CustomStyles;
