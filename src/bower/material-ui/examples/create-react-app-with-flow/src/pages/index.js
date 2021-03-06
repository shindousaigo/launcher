// @flow

import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Dialog from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import DialogTitle from 'src/bower/material-ui/packages/material-ui/src/DialogTitle';
import DialogContent from 'src/bower/material-ui/packages/material-ui/src/DialogContent';
import DialogContentText from 'src/bower/material-ui/packages/material-ui/src/DialogContentText';
import DialogActions from 'src/bower/material-ui/packages/material-ui/src/DialogActions';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import withRoot from '../withRoot';

const styles = (theme: Object) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

type ProvidedProps = {
  classes: Object,
};

type Props = {
  classes: Object,
};

type State = {
  open: boolean,
};

class Index extends React.Component<ProvidedProps & Props, State> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
