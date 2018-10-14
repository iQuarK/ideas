import React from 'react';
import { shallow } from 'enzyme';

import Idea from './component';

const component = (title="foo", body="bar") =>
    shallow(<Idea title={title} body={body} />);


describe('Idea', function() {
  test('An Idea should have a title', function() {
    expect(component().find('.title').text()).toBe('foo');
  });
  test('An Idea should have a body', function() {
    expect(component().find('.body').text()).toBe('bar');
  });

  describe('editing title and body', () => {
      test('Click over the title should change it to edit, and udpate it if blur', () => {
        const wrapper = component();
        wrapper.find('.title').simulate('click');
        expect(wrapper.state('editingTitle')).toBe(true);
        wrapper.find('.title').simulate('change', { target: { value: 'abc' } });
        wrapper.find('.title').simulate('blur');
        expect(wrapper.state('editingTitle')).toBe(false);
        expect(wrapper.state('title')).toBe('abc');
      });

      test('Click over the body should change it to edit, and udpate it if blur', () => {
        const wrapper = component();
        wrapper.find('.body').simulate('click');
        expect(wrapper.state('editingBody')).toBe(true);
        wrapper.find('.body').simulate('change', { target: { value: 'this is a body' } });
        wrapper.find('.body').simulate('blur');
        expect(wrapper.state('editingBody')).toBe(false);
        expect(wrapper.state('body')).toBe('this is a body');
      });
  });
});
