import React from 'react';
import { shallow } from 'enzyme';

import Ideas from './component';

const ideas = [
    {
      id: '1',
      title: 'A great idea',
      body: 'This is a great idea because it will make a better world'
    },
    {
      id: '2',
      title: 'A great idea',
      body: 'This is a great idea because it will make a better world'
    }
];

const component = () =>
    shallow(<Ideas ideas={ideas} />);

describe('Ideas', function() {
  test('it should have a list of ideas, and the new button', function() {
    expect(component().find('.ideas').children()).toHaveLength(3);
  });

  test('if the new button is pressed, the number of ideas is increased in 1', function() {
    const wrapper = component();
    expect(wrapper.state('ideas')).toHaveLength(2);
    wrapper.find('.new').simulate('click');
    expect(wrapper.state('ideas')).toHaveLength(3);
  });
});
