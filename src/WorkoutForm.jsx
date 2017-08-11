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
        distance: '',
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

    this.setState({
      fields: {
        target: '',
        activity: '',
        sets: '',
        reps: '',
        weight: '',
        distance: '',
      },
    });
  }

  handleChange({ name, value, error }) {
    console.log(name, value, error);
  }

  validate() {
    return true;
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
                name="Target"
                value={this.state.fields.target}
              />

              <FormField
                name="Activity"
                value={this.state.fields.activity}
              />

              <FormField
                name="Sets"
                value={this.state.fields.sets}
              />

              <FormField
                name="Reps"
                value={this.state.fields.reps}
              />

              <FormField
                name="Weight"
                value={this.state.fields.weight}
              />

              <button
                className="ui fluid teal button"
                type="submit"
                disabled={this.validate()}
              >
                Submit
              </button>
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
