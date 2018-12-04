import * as React from 'react';
import { StandardProps } from '@material-ui/core';
import { ButtonProps } from 'src/bower/material-ui/packages/material-ui/src/Button';
import { TransitionProps } from 'react-transition-group/Transition';
import { TransitionHandlerProps } from 'src/bower/material-ui/packages/material-ui/src/transitions/transition';

export interface SliderProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, SliderClassKey, 'onChange'> {
  disabled?: boolean;
  vertical?: boolean;
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  thumb?: React.ReactElement<any>;
  onChange?: (event: React.ChangeEvent<{}>, value: number) => void;
  onDragEnd?: (event: React.ChangeEvent<{}>) => void;
  onDragStart?: (event: React.ChangeEvent<{}>) => void;
}

export type SliderClassKey =
  | 'root'
  | 'container'
  | 'track'
  | 'trackBefore'
  | 'trackAfter'
  | 'thumb'
  | 'focused'
  | 'activated'
  | 'disabled'
  | 'vertical'
  | 'jumped';

declare const Slider: React.ComponentType<SliderProps>;

export default Slider;
