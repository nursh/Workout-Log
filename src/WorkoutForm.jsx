import React, { Component } from 'react';
import PropTypes from 'prop-types';


import FormField from './FormField.jsx';

class WorkoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        target: '',
        activity: '',
        sets: '',
        reps: '',
        weight: '',
      },
      fieldErrors: {},
    };
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getChildContext() {
    return { handleChange: this.handleChange };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const workout = this.state.fields;
    if (this.validate()) return;

    this.setState({
      fields: {
        target: '',
        activity: '',
        sets: '',
        reps: '',
        weight: '',
      },
    });

    console.log(workout);

    // do some ajax request to the server to add to the json file using workout;
  }

  handleChange({ name, value, error }) {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({
      fields,
      fieldErrors,
    });
  }

  validate() {
    const workout = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errorMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    for (const prop in workout) {
      if (prop !== 'weight') {
        if (!workout[prop]) return true;
      }
    }

    if (errorMessages.length) return true;
    return false;
  }

  render() {
    return (
      <div className="ui grid centered">
        <div className="six wide column">
          <div className="ui raised very padded segment">
            <h2 className="ui horizontal divider header">
              Workout Form
            </h2>
            <form className="ui form" onSubmit={this.handleSubmit}>

              <FormField
                placeholder="Target"
                name="target"
                value={this.state.fields.target}
              />

              <FormField
                placeholder="Activity"
                name="activity"
                value={this.state.fields.activity}
              />

              <FormField
                placeholder="Sets"
                name="sets"
                value={this.state.fields.sets}
              />

              <FormField
                placeholder="Reps"
                name="reps"
                value={this.state.fields.reps}
              />

              <FormField
                placeholder="Weight"
                name="weight"
                value={this.state.fields.weight}
              />

              <input
                className="ui fluid teal button"
                type="submit"
                disabled={this.validate()}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

WorkoutForm.childContextTypes = {
  handleChange: PropTypes.func,
};

export default WorkoutForm;
