import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Tooltip from 'src/bower/material-ui/packages/material-ui/src/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function InteractiveTooltips(props) {
  const { classes } = props;

  return (
    <div>
      <Tooltip title="Add" interactive>
        <Button className={classes.button}>Interactive</Button>
      </Tooltip>
      <Tooltip title="Add">
        <Button className={classes.button}>Non Interactive</Button>
      </Tooltip>
    </div>
  );
}

InteractiveTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveTooltips);
