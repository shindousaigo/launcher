import React from 'react';
import LinearProgress from 'src/bower/material-ui/packages/material-ui/src/LinearProgress';

export default function DeterminateLinearProgress() {
  return (
    <LinearProgress
      variant="determinate"
      value={60}
      style={{
        width: 150,
      }}
    />
  );
}
