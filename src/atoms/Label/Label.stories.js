import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import React from 'react';

import Label from './Label';

storiesOf('Atoms/Label', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Standard Label Element', () => <Label label={text('label')} />, {
    info: {
      text: 'Label Element'
    }
  });
