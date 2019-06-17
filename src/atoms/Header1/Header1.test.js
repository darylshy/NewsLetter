import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header1 from './Header1';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<Header1 />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header1 header="header" />);
  });
  it('should render an Header1 component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should find a Header1', () => {
    expect(component.find('h1')).toHaveLength(1);
  });
});
