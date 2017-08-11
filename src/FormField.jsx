import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  handleChange(evt) {
    const name = this.props.name;
    const value = evt.target.value;
    const error = '';
    this.setState({
      name,
      value,
    });
    this.context.handleChange({
      name,
      value,
      error,
    });
  }


  render() {
    return (
      <div className="field">
        <label
          htmlFor={this.props.name.toLowerCase()}
        >
          {this.props.name}
        </label>

        <input
          type="text"
          name={this.props.name.toLowerCase()}
          id={this.props.name.toLowerCase()}
          placeholder={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

FormField.contextTypes = {
  handleChange: PropTypes.func.isRequired,
};

