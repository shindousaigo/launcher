import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Grow from 'src/bower/material-ui/packages/material-ui/src/Grow';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleGrow extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    const polygon = (
      <Paper elevation={4} className={classes.paper}>
        <svg className={classes.svg}>
          <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
        </svg>
      </Paper>
    );

    return (
      <div className={classes.root}>
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <div className={classes.container}>
          <Grow in={checked}>{polygon}</Grow>
          {/* Conditionally applies the timeout property to change the entry speed. */}
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {polygon}
          </Grow>
        </div>
      </div>
    );
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);
