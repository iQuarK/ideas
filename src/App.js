import React, { Component } from 'react';

import Ideas from './components/Ideas';
import './App.css';

class App extends Component {
  render() {
    const ideas = [
      {
        id: '1',
        title: '1 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T17:12:00+01:00'
      },
      {
        id: '2',
        title: '2 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T17:13:00+01:00'
      },
      {
        id: '3',
        title: '3 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T14:12:00+01:00'
      },
      {
        id: '4',
        title: '4 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T16:12:00+01:00'
      },
      {
        id: '5',
        title: '5 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T17:32:00+01:00'
      },
      {
        id: '6',
        title: '6 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T19:12:00+01:00'
      },
      {
        id: '7',
        title: '7 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T18:12:00+01:00'
      },
      {
        id: '8',
        title: '8 A great idea',
        body: 'This is a great idea because it will make a better world',
        created_date: '2018-04-24T17:12:00+01:00'
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
