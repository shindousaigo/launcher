import React from 'react';
import Button from 'src/bower/material-ui/packages/material-ui/src/Button';

export default function MultilineButton() {
  return (
    <Button variant="contained" style={{ width: 400 }}>
      {[
        'Raised buttons are rectangular-shaped buttons.',
        'They may be used inline.',
        'They lift and display ink reactions on press.',
      ].join(' ')}
    </Button>
  );
}
