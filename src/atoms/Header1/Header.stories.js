import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import React from 'react';

import Header1 from './Header1';

storiesOf('Atoms/Header', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Standard h1 header', () => <Header1 header={text('header')} />, {
    info: {
      text: 'H1 Header Element'
    }
  });
