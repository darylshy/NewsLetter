import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import ControlledInput from './ControlledInput';

//props
const props = {
  inputType: 'email',
  handleChange: () => {},
  placeholder: 'enter email address',
  required: true,
  inputProp: 'email'
};

storiesOf('Atoms/ControlledInput', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Standard input',
    () => (
      <ControlledInput controlledValue={text('controlledValue')} {...props} />
    ),
    {
      info: {
        text: 'Input Form Element'
      }
    }
  );
