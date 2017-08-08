import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import Table from './WorkoutTable.jsx';
import WorkoutForm from './WorkoutForm.jsx';


function App() {
  return (
    <div className="ui center aligned">
      <h1 className="header center">Workout Log</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Table} />
          <Route path="/form" component={WorkoutForm} />
        </Switch>
      </Router>
    </div>
  );
}

render(
  <App />,
  document.getElementById('app'),
);
