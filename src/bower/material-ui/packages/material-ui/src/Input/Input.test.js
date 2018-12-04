import React from 'react';
import { assert } from 'chai';
import { createShallow } from 'src/bower/material-ui/packages/material-ui/src/test-utils';
import InputBase from '../InputBase';
import Input from './Input';

describe('<Input />', () => {
  let shallow;

  before(() => {
    shallow = createShallow({ untilSelector: 'Input' });
  });

  it('should render a <div />', () => {
    const wrapper = shallow(<Input />);
    assert.strictEqual(wrapper.type(), InputBase);
  });
});
