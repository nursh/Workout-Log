import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import WorkoutHeader from './WorkoutHeader.jsx';
import Table from './WorkoutTable.jsx';
import WorkoutForm from './WorkoutForm.jsx';


function App() {
  return (
    <div className="ui center aligned">
      <Router>
        <WorkoutHeader>
          <Switch>
            <Route exact path="/" component={Table} />
            <Route path="/form" component={WorkoutForm} />
          </Switch>
        </WorkoutHeader>
      </Router>
    </div>
  );
}

render(
  <App />,
  document.getElementById('app'),
);
