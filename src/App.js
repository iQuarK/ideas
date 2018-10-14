import React, { Component } from 'react';

import Ideas from './components/Ideas';
import './App.css';

class App extends Component {
  render() {
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
      },
      {
        id: '3',
        title: 'A great idea',
        body: 'This is a great idea because it will make a better world'
      },
      {
        id: '4',
        title: 'A great idea',
        body: 'This is a great idea because it will make a better world'
      },
      {
        id: '5',
        title: 'A great idea',
        body: 'This is a great idea because it will make a better world'
      },
      {
        id: '6',
        title: 'A great idea',
        body: 'This is a great idea because it will make a better world'
      },
      {
        id: '7',
        title: 'A great idea',
        body: 'This is a great idea because it will make a better world'
      },
      {
        id: '8',
        title: 'A great idea',
        body: 'This is a great idea because it will make a better world'
      }
    ];
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
