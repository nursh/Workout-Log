import React, { Component } from 'react';
import { render } from 'react-dom';


import Table from './WorkoutTable.jsx';
import data from './workout-data.json';

class App extends Component {

  state = {
    data: data,
  }

  render() {
    return (
      <div className="ui center aligned">
        <h1 className="header center">Workout Log</h1>
        <Table 
          data={this.state.data}
        />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);
