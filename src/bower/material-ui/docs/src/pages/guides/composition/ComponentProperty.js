import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import List from 'src/bower/material-ui/packages/material-ui/src/List';
import NoSsr from 'src/bower/material-ui/packages/material-ui/src/NoSsr';
import ListItem from 'src/bower/material-ui/packages/material-ui/src/ListItem';
import ListItemIcon from 'src/bower/material-ui/packages/material-ui/src/ListItemIcon';
import ListItemText from 'src/bower/material-ui/packages/material-ui/src/ListItemText';
import Divider from 'src/bower/material-ui/packages/material-ui/src/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import MemoryRouter from 'react-router/MemoryRouter';
import Route from 'react-router/Route';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
  },
});

class ListItemLink1 extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
}

ListItemLink1.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

function ListItemLink2(props) {
  const { primary, to } = props;
  return (
    <li>
      <ListItem button component={Link} to={to}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink2.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

function ComponentProperty(props) {
  const { classes } = props;

  // Use NoSsr to avoid SEO issues with the documentation website.
  return (
    <NoSsr>
      <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
        <div className={classes.root}>
          <Route>
            {({ location }) => (
              <Typography gutterBottom>Current route: {location.pathname}</Typography>
            )}
          </Route>
          <div className={classes.lists}>
            <List component="nav">
              <ListItemLink1 to="/inbox" primary="Inbox" icon={<InboxIcon />} />
              <ListItemLink1 to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
            </List>
            <Divider />
            <List component="nav">
              <ListItemLink2 to="/trash" primary="Trash" />
              <ListItemLink2 to="/spam" primary="Spam" />
            </List>
          </div>
        </div>
      </MemoryRouter>
    </NoSsr>
  );
}

ComponentProperty.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComponentProperty);
