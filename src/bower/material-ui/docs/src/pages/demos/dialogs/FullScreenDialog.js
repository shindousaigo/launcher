import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Dialog from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import Divider from 'src/bower/material-ui/packages/material-ui/src/Divider';
import AppBar from 'src/bower/material-ui/packages/material-ui/src/AppBar';
import Toolbar from 'src/bower/material-ui/packages/material-ui/src/Toolbar';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'src/bower/material-ui/packages/material-ui/src/Slide';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
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
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open full-screen dialog</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
