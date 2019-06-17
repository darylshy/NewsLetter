import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Subheader from './Subheader';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<Subheader />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Subheader subheader="subheader" />);
  });
  it('should render an Subheader component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should find a Subheader', () => {
    expect(component.find('h3')).toHaveLength(1);
  });
});
