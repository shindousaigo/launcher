import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'src/bower/material-ui/packages/material-ui/src/AppBar';
import Toolbar from 'src/bower/material-ui/packages/material-ui/src/Toolbar';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import Paper from 'src/bower/material-ui/packages/material-ui/src/Paper';
import Grid from 'src/bower/material-ui/packages/material-ui/src/Grid';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import TextField from 'src/bower/material-ui/packages/material-ui/src/TextField';
import Tooltip from 'src/bower/material-ui/packages/material-ui/src/Tooltip';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing.unit,
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={16} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
