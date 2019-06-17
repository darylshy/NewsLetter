import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from './Checkbox';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<Checkbox />', () => {
  let component;
  beforeEach(() => {
    const mock = jest.fn();
    component = shallow(<Checkbox handleChecked={mock} />);
  });
  it('should render an Checkbox component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should find a Checkbox', () => {
    expect(component.find('input')).toHaveLength(1);
  });
});
