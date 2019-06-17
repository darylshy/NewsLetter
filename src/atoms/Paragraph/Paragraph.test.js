import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraph from './Paragraph';
import React from 'react';

configure({ adapter: new Adapter() });

describe('<Paragraph />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Paragraph text="some paragraph text" />);
  });
  it('should render an Paragraph component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should find a Paragraph', () => {
    expect(component.find('p')).toHaveLength(1);
  });
});
