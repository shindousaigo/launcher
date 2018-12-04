import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';
import Dialog from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import DialogActions from 'src/bower/material-ui/packages/material-ui/src/DialogActions';
import DialogContent from 'src/bower/material-ui/packages/material-ui/src/DialogContent';
import DialogContentText from 'src/bower/material-ui/packages/material-ui/src/DialogContentText';
import DialogTitle from 'src/bower/material-ui/packages/material-ui/src/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
