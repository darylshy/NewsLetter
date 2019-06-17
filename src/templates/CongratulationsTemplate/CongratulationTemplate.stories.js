import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import CongratulationTemplate from './CongratulationTemplate';

storiesOf('Molecules/CongratulationTemplate', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add(
    'CongratulationTemplate Component',
    () => (
      <div style={{ color: '#94aebf' }}>
        <CongratulationTemplate
          labelText={text('labelText')}
          header={text('header')}
          subheader={text('subheader')}
        />
      </div>
    ),
    {
      info: {
        text: 'CongratulationTemplate Component'
      }
    }
  );
