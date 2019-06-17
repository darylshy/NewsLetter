import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import SignUpForm from './SignUpForm';
import { array, boolean } from '@storybook/addon-knobs/dist/deprecated';

storiesOf('Molecules/SignUpForm', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add(
    'SignUpForm Component',
    () => (
      <div style={{ color: '#94aebf' }}>
        <SignUpForm
          labelText={text('labelText')}
          formButtonText={text('formButtonText')}
          header={text('header')}
          subheader={text('subheader')}
          formButtonClickHandler={action('button clicked')}
          formInputFields={[
            {
              controlledValue: { firstname: 'daryl' },
              inputType: 'text',
              handleChange: () => {},
              placeholder: 'enter first name',
              required: true,
              inputProp: 'firstname'
            }
          ]}
          footerParagraphText={text('footerParagraphText')}
          footerLinkText={text('footerLinkText')}
          footerLinkEndpoint={text('footerLinkEndpoint')}
          footerCheckboxChangeHandler={action('checkbox checked')}
          footerCheckboxChecked={boolean('checked')}
        />
      </div>
    ),
    {
      info: {
        text: 'Footer Component'
      }
    }
  );
