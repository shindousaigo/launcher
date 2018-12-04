import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Fab from 'src/bower/material-ui/packages/material-ui/src/Fab';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function ButtonSizes(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Button size="small" className={classes.margin}>
          Small
        </Button>
        <Button size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);
