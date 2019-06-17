import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import React from 'react';

import Subheader from './Subheader';

storiesOf('Atoms/Subheader', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Standard Subheader Element',
    () => (
      <div style={{ color: '#94aebf' }}>
        <Subheader subheader={text('subheader')} />
      </div>
    ),
    {
      info: {
        text: 'Subheader Element'
      }
    }
  );
