import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Fab from 'src/bower/material-ui/packages/material-ui/src/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'src/bower/material-ui/packages/material-ui/src/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab disabled aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
