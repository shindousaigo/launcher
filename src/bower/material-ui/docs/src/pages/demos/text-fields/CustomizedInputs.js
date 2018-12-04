import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Input from 'src/bower/material-ui/packages/material-ui/src/Input';
import InputBase from 'src/bower/material-ui/packages/material-ui/src/InputBase';
import InputLabel from 'src/bower/material-ui/packages/material-ui/src/InputLabel';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import purple from 'src/bower/material-ui/packages/material-ui/src/colors/purple';
import green from 'src/bower/material-ui/packages/material-ui/src/colors/green';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          Custom CSS
        </InputLabel>
        <Input
          id="custom-css-standard-input"
          classes={{
            underline: classes.cssUnderline,
          }}
        />
      </FormControl>
      <TextField
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label="Custom CSS"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <MuiThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="MuiThemeProvider"
          id="mui-theme-provider-standard-input"
        />
        <TextField
          className={classes.margin}
          label="MuiThemeProvider"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </MuiThemeProvider>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
          Bootstrap
        </InputLabel>
        <InputBase
          id="bootstrap-input"
          defaultValue="react-bootstrap"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
      </FormControl>
      <InputBase className={classes.margin} defaultValue="Naked input" />
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);
