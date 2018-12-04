import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Table from 'src/bower/material-ui/packages/material-ui/src/Table';
import TableBody from 'src/bower/material-ui/packages/material-ui/src/TableBody';
import TableCell from 'src/bower/material-ui/packages/material-ui/src/TableCell';
import TableRow from 'src/bower/material-ui/packages/material-ui/src/TableRow';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Link from 'docs/src/modules/components/Link';

const styles = {
  root: {
    width: '100%',
  },
};

function LatestVersion(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell padding="dense">
              <Typography>master branch</Typography>
            </TableCell>
            <TableCell padding="dense">
              <Typography
                component={props2 => (
                  <Link
                    {...props2}
                    variant="secondary"
                    rel="nofollow"
                    href="https://material-ui.netlify.com/"
                  />
                )}
              >
                Documentation
              </Typography>
            </TableCell>
            <TableCell padding="dense">
              <Typography
                component={props2 => (
                  <Link
                    {...props2}
                    variant="secondary"
                    href="https://github.com/mui-org/material-ui"
                  />
                )}
              >
                Source code
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

LatestVersion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestVersion);
