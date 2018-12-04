import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Input from 'src/bower/material-ui/packages/material-ui/src/Input';
import InputLabel from 'src/bower/material-ui/packages/material-ui/src/InputLabel';
import InputAdornment from 'src/bower/material-ui/packages/material-ui/src/InputAdornment';
import FormControl from 'src/bower/material-ui/packages/material-ui/src/FormControl';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function InputWithIcon(props) {
  const { classes } = props;

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);
