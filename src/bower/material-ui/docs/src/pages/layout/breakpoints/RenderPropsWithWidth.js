import React from 'react';
import withWidth from 'src/bower/material-ui/packages/material-ui/src/withWidth';
import Typography from 'src/bower/material-ui/packages/material-ui/src/Typography';
import toRenderProps from 'recompose/toRenderProps';

const WithWidth = toRenderProps(withWidth());

function RenderPropsWithWidth() {
  return (
    <WithWidth>
      {({ width }) => <Typography variant="subtitle1">Current width: {width}</Typography>}
    </WithWidth>
  );
}

export default RenderPropsWithWidth;
