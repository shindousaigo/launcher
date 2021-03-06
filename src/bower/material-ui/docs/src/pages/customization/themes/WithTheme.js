import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import { withTheme } from 'src/bower/material-ui/packages/material-ui/src/styles';

function WithTheme(props) {
  const { theme } = props;
  const primaryText = theme.palette.text.primary;
  const primaryColor = theme.palette.primary.main;

  const styles = {
    primaryText: {
      backgroundColor: theme.palette.background.default,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: primaryText,
    },
    primaryColor: {
      backgroundColor: primaryColor,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: theme.palette.common.white,
    },
  };

  return (
    <div style={{ width: 300 }}>
      <Typography style={styles.primaryColor}>{`Primary color ${primaryColor}`}</Typography>
      <Typography style={styles.primaryText}>{`Primary text ${primaryText}`}</Typography>
    </div>
  );
}

WithTheme.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(WithTheme); // Let's get the theme as a property
