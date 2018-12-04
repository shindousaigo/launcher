import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Input from 'src/bower/material-ui/packages/material-ui/src/Input';
import OutlinedInput from 'src/bower/material-ui/packages/material-ui/src/OutlinedInput';
import FilledInput from 'src/bower/material-ui/packages/material-ui/src/FilledInput';
import InputLabel from 'src/bower/material-ui/packages/material-ui/src/InputLabel';
import MenuItem from 'src/bower/material-ui/packages/material-ui/src/MenuItem';
import FormHelperText from 'src/bower/material-ui/packages/material-ui/src/FormHelperText';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import Select from 'src/bower/material-ui/packages/material-ui/src/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<Input name="age" id="age-helper" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            displayEmpty
            name="age"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-label-placeholder">
            Age
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<Input name="age" id="age-label-placeholder" />}
            displayEmpty
            name="age"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} disabled>
          <InputLabel htmlFor="name-disabled">Name</InputLabel>
          <Select
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input name="name" id="name-disabled" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
          </Select>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} error>
          <InputLabel htmlFor="name-error">Name</InputLabel>
          <Select
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            renderValue={value => `⚠️  - ${value}`}
            input={<Input id="name-error" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-readonly">Name</InputLabel>
          <Select
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input name="name" id="name-readonly" readOnly />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
          </Select>
          <FormHelperText>Read only</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-auto-width">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<Input name="age" id="age-auto-width" />}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Auto width</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            name="age"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Placeholder</FormHelperText>
        </FormControl>
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="age-required">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            name="age"
            inputProps={{
              id: 'age-required',
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Age
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<FilledInput name="age" id="filled-age-simple" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
