import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Fade from 'src/bower/material-ui/packages/material-ui/src/Fade';

const styles = theme => ({
  root: {
    height: 180,
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

class SimpleFade extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg>
          </Paper>
        </Fade>
      </div>
    );
  }
}

SimpleFade.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleFade);
