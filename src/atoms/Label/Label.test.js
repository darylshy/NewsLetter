import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from './Label';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<Label />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Label label="label" />);
  });
  it('should render an Label component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should find a div with className "Label"', () => {
    expect(component.find('div').hasClass('Label')).toEqual(true);
  });
});
