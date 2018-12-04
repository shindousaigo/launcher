import * as React from 'react';
import { StandardProps } from '@material-ui/core';
import { ButtonProps } from 'src/bower/material-ui/packages/material-ui/src/Button';
import { TooltipProps } from 'src/bower/material-ui/packages/material-ui/src/Tooltip';

export interface SpeedDialActionProps
  extends StandardProps<Partial<TooltipProps>, SpeedDialActionClassKey> {
  ButtonProps?: Partial<ButtonProps>;
  delay?: number;
  icon: React.ReactNode;
  tooltipPlacement?: TooltipProps['placement'];
  tooltipTitle?: React.ReactNode;
  tooltipOpen?: boolean;
}

export type SpeedDialActionClassKey = 'root' | 'button' | 'buttonClosed';

declare const SpeedDialAction: React.ComponentType<SpeedDialActionProps>;

export default SpeedDialAction;
