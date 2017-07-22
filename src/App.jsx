import React from 'react';
import { render } from 'react-dom';


import Table from './WorkoutTable.jsx';

function App() {
  return (
    <div className="ui center aligned">
      <h1 className="header center">Workout Log</h1>
      <Table />
    </div>
  );
}

render(
  <App />,
  document.getElementById('app'),
);
