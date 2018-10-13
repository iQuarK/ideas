import React from 'react';
import { shallow } from 'enzyme';

import logo from './logo.svg';
import App from './App';

describe('App', function() {
  test('should render an the App without errors and having a logo', function() {
    expect(shallow(<App />).contains(<img src={logo} className="App-logo" alt="logo" />)).toBe(true);
  });
});
