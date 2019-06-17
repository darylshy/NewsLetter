import { configure, addDecorator } from '@storybook/react';
import React from 'react';

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <div style={{ padding: '20px', background: '#131122' }}>{storyFn()}</div>
));

configure(loadStories, module);
