import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import HeaderMolecule from './HeaderMolecule';

storiesOf('Molecules/HeaderMolecule', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add(
    'HeaderMolecule Component',
    () => (
      <div style={{ color: '#94aebf' }}>
        <HeaderMolecule header={text('header')} subheader={text('subheader')} />
      </div>
    ),
    {
      info: {
        text: 'HeaderMolecule Component'
      }
    }
  );
