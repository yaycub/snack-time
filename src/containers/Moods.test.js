import React from 'react';
import { shallow } from 'enzyme';
import { Moods } from './Moods';

describe('Moods Component', () => {
  it('should render Moods', () => {
    const wrapper = shallow(<Moods />);
    expect(wrapper).toMatchSnapshot();
  });
});
