import React from 'react';
import PropTypes from 'prop-types';
import withWidth from 'src/bower/material-ui/packages/material-ui/src/withWidth';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';

const components = {
  sm: 'em',
  md: 'u',
  lg: 'del',
};

function WithWidth(props) {
  const { width } = props;
  const Component = components[width] || 'span';

  return (
    <Typography variant="subtitle1">
      <Component>{`Current width: ${width}`}</Component>
    </Typography>
  );
}

WithWidth.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(WithWidth);
