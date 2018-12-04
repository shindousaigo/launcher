import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Dialog from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import DialogActions from 'src/bower/material-ui/packages/material-ui/src/DialogActions';
import DialogContent from 'src/bower/material-ui/packages/material-ui/src/DialogContent';
import DialogContentText from 'src/bower/material-ui/packages/material-ui/src/DialogContentText';
import DialogTitle from 'src/bower/material-ui/packages/material-ui/src/DialogTitle';

class AlertDialog extends React.Component {
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
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
