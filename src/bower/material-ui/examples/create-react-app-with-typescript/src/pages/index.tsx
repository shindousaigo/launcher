import * as React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Dialog from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import DialogActions from 'src/bower/material-ui/packages/material-ui/src/DialogActions';
import DialogContent from 'src/bower/material-ui/packages/material-ui/src/DialogContent';
import DialogContentText from 'src/bower/material-ui/packages/material-ui/src/DialogContentText';
import DialogTitle from 'src/bower/material-ui/packages/material-ui/src/DialogTitle';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import { Theme } from 'src/bower/material-ui/packages/material-ui/src/styles/createMuiTheme';
import createStyles from 'src/bower/material-ui/packages/material-ui/src/styles/createStyles';
import withStyles, { WithStyles } from 'src/bower/material-ui/packages/material-ui/src/styles/withStyles';
import withRoot from '../withRoot';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20,
    },
  });

type State = {
  open: boolean;
};

class Index extends React.Component<WithStyles<typeof styles>, State> {
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
