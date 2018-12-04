import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Tooltip from 'src/bower/material-ui/packages/material-ui/src/Tooltip';
import Fade from 'src/bower/material-ui/packages/material-ui/src/Fade';
import Zoom from 'src/bower/material-ui/packages/material-ui/src/Zoom';

function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title="Add">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  );
}

export default TransitionsTooltips;
