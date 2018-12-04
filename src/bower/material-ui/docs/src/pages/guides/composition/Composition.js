import React from 'react';
import IconButton from 'src/bower/material-ui/packages/material-ui/src/IconButton';
import Icon from 'src/bower/material-ui/packages/material-ui/src/Icon';

const WrappedIcon = props => <Icon {...props} />;
WrappedIcon.muiName = 'Icon';

export default function Composition() {
  return (
    <div>
      <IconButton>
        <Icon>alarm</Icon>
      </IconButton>
      <IconButton>
        <WrappedIcon>alarm</WrappedIcon>
      </IconButton>
    </div>
  );
}
