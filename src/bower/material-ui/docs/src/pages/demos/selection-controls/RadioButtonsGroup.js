import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Radio from 'src/bower/material-ui/packages/material-ui/src/Radio';
import RadioGroup from 'src/bower/material-ui/packages/material-ui/src/RadioGroup';
import FormHelperText from 'src/bower/material-ui/packages/material-ui/src/FormHelperText';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import FormLabel from 'src/bower/material-ui/packages/material-ui/src/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
              labelPlacement="start"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
              labelPlacement="start"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="Other"
              labelPlacement="start"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
              labelPlacement="start"
            />
          </RadioGroup>
          <FormHelperText>labelPlacement start</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
