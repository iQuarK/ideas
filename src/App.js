import React, { Component } from 'react';

import Ideas from './components/Ideas';
import { load } from './lib/util';
import './App.css';

class App extends Component {
  render() {
    const ideas = load();

    return (
      <div className='App'>
        <header className='header'>
          <p>
            Write your own ideas.
          </p>
        </header>
        <Ideas ideas={ideas} />
      </div>
    );
  }
}

export default App;
