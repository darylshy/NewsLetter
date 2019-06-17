import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Anchor from './Anchor';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<Anchor />', () => {
  it('should render an anchor tag', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Anchor link="Link" />
        </MemoryRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
