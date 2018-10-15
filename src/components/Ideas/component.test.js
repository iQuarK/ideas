/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';

import Ideas from './component';

const ideas = [
    {
      id: '1',
      title: 'This is an idea',
      body: 'This is a great idea because it will make a better world',
      created_date: '2018-04-24T18:11:00+01:00'
    },
    {
      id: '2',
      title: 'A great idea',
      body: 'This is a great idea because it will make a better world',
      created_date: '2018-04-24T18:12:00+01:00'
    }
];

const component = () =>
    shallow(<Ideas ideas={ideas} />);

describe('Ideas', function() {
  test('it should have a list of ideas, the select and the new button', function() {
    expect(component().find('.ideas').children()).toHaveLength(3);
  });

  test('if the new button is pressed, the number of ideas is increased in 1', function() {
    const wrapper = component();
    wrapper.find('.new').simulate('click');
    expect(wrapper.state('ideas')).toHaveLength(2);
  });

  test('if the remove button is pressed, the number of ideas is decreased by 1', function() {
    const wrapper = component();
    wrapper.find('Idea').first().prop('deleteIdea')('1');
    expect(wrapper.state('ideas')).toHaveLength(0);
  });

  test('the list is sorted by title by default', function() {
    const wrapper = component();
    expect(wrapper.find('Idea').first().props().title).toBe('A great idea');
  });

  test('the list can be sorted by date of creation', function() {
    const wrapper = component();
    wrapper.setState({ ...wrapper.state(), sortBy: 'created_date' });
    expect(wrapper.find('Idea').first().props().title).toBe('This is an idea');
  });
});
