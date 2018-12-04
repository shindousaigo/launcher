import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';
import Tooltip from 'src/bower/material-ui/packages/material-ui/src/Tooltip';

function DisabledTooltips() {
  return (
    <Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>
  );
}

export default DisabledTooltips;
