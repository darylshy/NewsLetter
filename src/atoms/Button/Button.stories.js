import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Button from './Button';
storiesOf('Atoms/Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Standard Form Button',
    () => (
      <Button
        handleClick={action('Button Clicked.')}
        buttonText={text('buttonText')}
        disabled={boolean('disabled')}
      />
    ),
    {
      info: {
        text: 'Standard form button'
      }
    }
  );
