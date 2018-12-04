import React from 'react';
import Avatar from 'src/bower/material-ui/packages/material-ui/src/Avatar';
import Chip from 'src/bower/material-ui/packages/material-ui/src/Chip';

export default function DeletableAvatarChip() {
  return <Chip avatar={<Avatar>MB</Avatar>} label="SvgIcon Chip" onDelete={() => {}} />;
}
