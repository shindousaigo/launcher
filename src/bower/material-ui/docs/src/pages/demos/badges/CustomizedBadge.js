import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import Badge from 'src/bower/material-ui/packages/material-ui/src/Badge';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

function CustomizedBadge(props) {
  const { classes } = props;

  return (
    <IconButton aria-label="Cart">
      <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedBadge);
