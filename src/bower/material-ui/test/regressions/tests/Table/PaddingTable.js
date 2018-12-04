import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Table from 'src/bower/material-ui/packages/material-ui/src/Table';
import TableBody from 'src/bower/material-ui/packages/material-ui/src/TableBody';
import TableCell from 'src/bower/material-ui/packages/material-ui/src/TableCell';
import TableHead from 'src/bower/material-ui/packages/material-ui/src/TableHead';
import TableRow from 'src/bower/material-ui/packages/material-ui/src/TableRow';

function MyTable(props) {
  const { padding } = props;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding={padding}>Padding: {padding}</TableCell>
            <TableCell padding={padding} />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell padding={padding}>Dummy Data</TableCell>
            <TableCell padding={padding}>Dummy Data</TableCell>
          </TableRow>
          <TableRow>
            <TableCell padding={padding}>Dummy Data</TableCell>
            <TableCell padding={padding}>Dummy Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

MyTable.propTypes = {
  padding: PropTypes.any,
};

function PaddingTable() {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <MyTable padding="default" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="dense" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="none" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="checkbox" />
        </Grid>
      </Grid>
    </div>
  );
}

export default PaddingTable;
