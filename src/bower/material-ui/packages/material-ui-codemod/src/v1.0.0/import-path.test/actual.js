import React from 'react';
import { withStyles } from 'src/bower/material-ui/packages/material-ui/src/styles';
import { MenuItem } from 'src/bower/material-ui/packages/material-ui/src/Menu';
import MuiTabs, { Tab } from 'src/bower/material-ui/packages/material-ui/src/Tabs';
import BottomNavigation, { BottomNavigationAction } from 'src/bower/material-ui/packages/material-ui/src/BottomNavigation';
import Card, { CardActions, CardContent } from 'src/bower/material-ui/packages/material-ui/src/Card';
import { CardHeader, CardMedia } from 'src/bower/material-ui/packages/material-ui/src/Card';
import MuiCollapse from 'src/bower/material-ui/packages/material-ui/src/transitions/Collapse';
import List, {
  ListItemIcon,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from 'src/bower/material-ui/packages/material-ui/src/List';
import Dialog, { DialogTitle } from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import {
  withMobileDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from 'src/bower/material-ui/packages/material-ui/src/Dialog';
import Slide from 'src/bower/material-ui/packages/material-ui/src/transitions/Slide';
import Radio, { RadioGroup } from 'src/bower/material-ui/packages/material-ui/src/Radio';
import { FormControlLabel } from 'src/bower/material-ui/packages/material-ui/src/Form';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
} from 'src/bower/material-ui/packages/material-ui/src/ExpansionPanel';
import GridList, { GridListTile } from 'src/bower/material-ui/packages/material-ui/src/GridList';
import { CircularProgress } from 'src/bower/material-ui/packages/material-ui/src/Progress';
import { LinearProgress as MuiLinearProgress } from 'src/bower/material-ui/packages/material-ui/src/Progress';
import { FormLabel, FormControl, FormGroup, FormHelperText } from 'src/bower/material-ui/packages/material-ui/src/Form';
import Fade from 'src/bower/material-ui/packages/material-ui/src/transitions/Fade';
import Stepper, { Step, StepButton, StepContent } from 'src/bower/material-ui/packages/material-ui/src/Stepper';
import Table, { TableBody, TableCell, TablePagination, TableRow } from 'src/bower/material-ui/packages/material-ui/src/Table';
import TableHead from 'src/bower/material-ui/packages/material-ui/src/Table/TableHead';
import Input, { InputLabel } from 'src/bower/material-ui/packages/material-ui/src/Input';
import Grow from 'src/bower/material-ui/packages/material-ui/src/transitions/Grow';
import TableFooter from 'src/bower/material-ui/packages/material-ui/src/Table/TableFooter';
import withWidth, { isWidthUp } from 'src/bower/material-ui/packages/material-ui/src/utils/withWidth';
import Zoom from 'src/bower/material-ui/packages/material-ui/src/transitions/Zoom';
import ClickAwayListener from 'src/bower/material-ui/packages/material-ui/src/utils/ClickAwayListener';
import ListSubheader from 'src/bower/material-ui/packages/material-ui/src/List/ListSubheader';
