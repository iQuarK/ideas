import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', function() {
  test('should render the App with a number of ideas', function() {
    expect(shallow(<App />).find(".ideas").children()).toHaveLength(9);
  });
});
