import React from 'react';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledButton = withStyles({
  root: {
    background: styledBy('color', {
      default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }),
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: styledBy('color', {
      default: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
  },
})(({ classes, color, ...other }) => <Button className={classes.root} {...other} />);

class DynamicCSS extends React.Component {
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
        <StyledButton color={this.state.color}>Dynamic CSS</StyledButton>
      </React.Fragment>
    );
  }
}

export default DynamicCSS;
