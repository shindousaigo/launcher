import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Dialog from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import DialogActions from 'src/bower/material-ui/packages/material-ui/src/DialogActions';
import DialogContent from 'src/bower/material-ui/packages/material-ui/src/DialogContent';
import DialogContentText from 'src/bower/material-ui/packages/material-ui/src/DialogContentText';
import DialogTitle from 'src/bower/material-ui/packages/material-ui/src/DialogTitle';
import Slide from 'src/bower/material-ui/packages/material-ui/src/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
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
        <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;
