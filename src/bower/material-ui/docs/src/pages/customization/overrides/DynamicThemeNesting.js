import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import { createMuiTheme, MuiThemeProvider } from 'src/bower/material-ui/packages/material-ui/src/styles';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import blue from 'src/bower/material-ui/packages/material-ui/src/colors/blue';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';

const defaultTheme = createMuiTheme();

class DynamicThemeNesting extends React.Component {
  state = {
    color: 'default',
  };

  handleChange = event => {
    this.setState({ color: event.target.checked ? 'blue' : 'default' });
  };

  render() {
    return (
      <React.Fragment>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.color === 'blue'}
              onChange={this.handleChange}
              color="primary"
              value="dynamic-class-name"
            />
          }
          label="Blue"
        />
        <MuiThemeProvider
          theme={
            this.state.color === 'blue'
              ? {
                  ...defaultTheme,
                  palette: {
                    ...defaultTheme.palette,
                    secondary: {
                      main: blue[500],
                      contrastText: '#fff',
                    },
                  },
                }
              : defaultTheme
          }
        >
          <Button variant="contained" color="secondary">
            {'Theme nesting'}
          </Button>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default DynamicThemeNesting;
