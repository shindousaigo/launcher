import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from 'src/bower/material-ui/packages/material-ui/src/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import Tooltip from 'src/bower/material-ui/packages/material-ui/src/Tooltip';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

function SimpleTooltips(props) {
  const { classes } = props;
  return (
    <div>
      <Tooltip title="Delete">
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="Add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Add" aria-label="Add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);
