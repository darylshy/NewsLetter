import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Button buttonText="Button" handleClick={mock} />);
  });
  const mock = jest.fn();
  it('should render an Button component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should find a button', () => {
    expect(component.find('button')).toHaveLength(1);
  });
  it('should have correct button label', () => {
    expect(component.find('button').props().children).toBe('BUTTON');
  });
  it('should trigger callback on click', () => {
    component.find('button').simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
  });
});
