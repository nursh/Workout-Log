import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WorkoutForm extends Component {

  render() {
    return (
      <div className="ui grid centered">
        <div className="six wide column">
          <div className="ui raised very padded segment">
            <h2 className="ui horizontal divider header">
              Workout Form
            </h2>
            <form className="ui form">
              <div className="field">
                <label htmlFor="target">Target</label>
                <input type="text" name="target" id="target" placeholder="Target" />
              </div>

              <div className="field">
                <label htmlFor="activity">Activity</label>
                <input type="text" name="activity" id="activity" placeholder="Activity" />
              </div>

              <div className="field">
                <label htmlFor="sets">Sets</label>
                <input type="text" name="sets" id="sets" placeholder="Sets" />
              </div>

              <div className="field">
                <label htmlFor="reps">Reps</label>
                <input type="text" name="reps" id="reps" placeholder="Reps" />
              </div>

              <div className="field">
                <label htmlFor="weight">Weight</label>
                <input type="text" name="weight" id="weight" placeholder="Weight" />
              </div>

              <div className="field">
                <label htmlFor="distance">Distance</label>
                <input type="text" name="distance" id="distance" placeholder="Distance" />
              </div>

              <button className="ui right floated teal button" type="submit">Submit</button>
            </form>
          </div>
          <Link
            to="/"
          >
            <button className="ui right floated red button">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WorkoutForm;
