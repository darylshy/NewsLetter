import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import React from 'react';

import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Standard Paragraph Element',
    () => <Paragraph style={{ color: '#94aebf' }} text={text('text')} />,
    {
      info: {
        text: 'Paragraph Element'
      }
    }
  );
