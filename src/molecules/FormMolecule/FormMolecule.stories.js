import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  array,
  object,
  boolean
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import FormMolecule from './FormMolecule';

storiesOf('Molecules/FormMolecule', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add(
    'FormMolecule Component',
    () => (
      <div style={{ color: '#94aebf' }}>
        <FormMolecule
          inputFields={[
            {
              controlledValue: { firstname: 'daryl' },
              inputType: 'text',
              handleChange: () => {},
              placeholder: 'enter first name',
              required: true,
              inputProp: 'firstname'
            }
          ]}
          handleClick={action('button clicked')}
          buttonText={text('buttonText')}
        />
      </div>
    ),
    {
      info: {
        text: 'FormMolecule Component'
      }
    }
  );
