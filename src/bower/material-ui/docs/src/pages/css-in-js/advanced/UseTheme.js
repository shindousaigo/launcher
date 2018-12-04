import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/styles';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';

function DeepChild() {
  const theme = useTheme();

  return <Button>{`spacing ${theme.spacing}`}</Button>;
}

function UseTheme() {
  return (
    <ThemeProvider
      theme={{
        spacing: '8px',
      }}
    >
      <DeepChild />
    </ThemeProvider>
  );
}

export default UseTheme;
