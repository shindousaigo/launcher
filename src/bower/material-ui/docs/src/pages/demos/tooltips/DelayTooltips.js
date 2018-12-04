import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Tooltip from 'src/bower/material-ui/packages/material-ui/src/Tooltip';

function DelayTooltips() {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}

export default DelayTooltips;
