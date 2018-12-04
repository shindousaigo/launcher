import React from 'react';
import DialogActions from 'src/bower/material-ui/packages/material-ui/src/DialogActions';
import DialogContent from 'src/bower/material-ui/packages/material-ui/src/DialogContent';
import DialogContentText from 'src/bower/material-ui/packages/material-ui/src/DialogContentText';
import DialogTitle from 'src/bower/material-ui/packages/material-ui/src/DialogTitle';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';

export default function AlertDialog() {
  return (
    <Paper
      elevation={8}
      style={{
        width: 300,
      }}
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Disagree</Button>
        <Button color="primary">Agree</Button>
      </DialogActions>
    </Paper>
  );
}
