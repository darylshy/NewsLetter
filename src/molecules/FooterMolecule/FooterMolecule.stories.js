import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import FooterMolecule from './FooterMolecule';

storiesOf('Molecules/FooterMolecule', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add(
    'FooterMolecule Component',
    () => (
      <div style={{ color: '#94aebf' }}>
        <FooterMolecule
          paragraph={text('paragraph')}
          anchor={text('anchor')}
          footerCheckboxChangeHandler={action('checkbox changed')}
        />
      </div>
    ),
    {
      info: {
        text: 'Footer Component'
      }
    }
  );
