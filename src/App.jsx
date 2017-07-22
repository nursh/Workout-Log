import React, { Component } from 'react';
import { render } from 'react-dom';


import Table from './WorkoutTable.jsx';

class App extends Component {

  state = {
    
  }

  render() {
    return (
      <div className="ui center aligned header">
        <h1>Workout Log</h1>
        <Table />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);
