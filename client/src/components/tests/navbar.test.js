import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../common/navbar';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const wrapper = shallow(<Navbar />);

  return {
    wrapper
  };
}

it('renders with text and button', () => {
  const { wrapper } = setup();
  expect(wrapper.length).toEqual(1);  // Exactly 1 React node is rendered
});
