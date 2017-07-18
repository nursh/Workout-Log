import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {


  render() {
    return (
      <div className="ui center aligned header">
        <h1>Workout Log</h1>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);
