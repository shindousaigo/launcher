import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import FormControlLabel from 'src/bower/material-ui/packages/material-ui/src/FormControlLabel';
import FormLabel from 'src/bower/material-ui/packages/material-ui/src/FormLabel';
import Radio from 'src/bower/material-ui/packages/material-ui/src/Radio';
import RadioGroup from 'src/bower/material-ui/packages/material-ui/src/RadioGroup';
import Switch from 'src/bower/material-ui/packages/material-ui/src/Switch';
import { capitalize } from 'src/bower/material-ui/packages/material-ui/src/utils/helpers';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
  },
  controls: {
    margin: theme.spacing.unit * 3,
  },
  exampleWrapper: {
    position: 'relative',
    height: 380,
  },
  radioGroup: {
    margin: `${theme.spacing.unit}px 0`,
  },
  speedDial: {
    position: 'absolute',
    '&$directionUp, &$directionLeft': {
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3,
    },
    '&$directionDown, &$directionRight': {
      top: theme.spacing.unit * 2,
      left: theme.spacing.unit * 3,
    },
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {},
});

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class SpeedDials extends React.Component {
  state = {
    direction: 'up',
    open: false,
    hidden: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleDirectionChange = (event, value) => {
    this.setState({
      direction: value,
    });
  };

  handleHiddenChange = (event, hidden) => {
    this.setState(state => ({
      hidden,
      // hidden implies !open
      open: hidden ? false : state.open,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { direction, hidden, open } = this.state;

    const speedDialClassName = classNames(
      classes.speedDial,
      classes[`direction${capitalize(direction)}`],
    );

    return (
      <div className={classes.root}>
        <div className={classes.controls}>
          <FormControlLabel
            control={
              <Switch
                checked={hidden}
                onChange={this.handleHiddenChange}
                value="hidden"
                color="primary"
              />
            }
            label="Hidden"
          />
          <FormLabel component="legend">Direction</FormLabel>
          <RadioGroup
            aria-label="Direction"
            name="direction"
            className={classes.radioGroup}
            value={direction}
            onChange={this.handleDirectionChange}
            row
          >
            <FormControlLabel value="up" control={<Radio />} label="Up" />
            <FormControlLabel value="right" control={<Radio />} label="Right" />
            <FormControlLabel value="down" control={<Radio />} label="Down" />
            <FormControlLabel value="left" control={<Radio />} label="Left" />
          </RadioGroup>
        </div>
        <div className={classes.exampleWrapper}>
          <SpeedDial
            ariaLabel="SpeedDial example"
            className={speedDialClassName}
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onBlur={this.handleClose}
            onClick={this.handleClick}
            onClose={this.handleClose}
            onFocus={this.handleOpen}
            onMouseEnter={this.handleOpen}
            onMouseLeave={this.handleClose}
            open={open}
            direction={direction}
          >
            {actions.map(action => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={this.handleClick}
              />
            ))}
          </SpeedDial>
        </div>
      </div>
    );
  }
}

SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDials);
