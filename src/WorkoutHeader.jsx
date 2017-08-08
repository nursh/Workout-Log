import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Header = props => (
  <div>
    <div className="ui huge menu">
      <div className="header item">
        <Link
          to="/"
        >
          <i className="book icon"></i>
          Workout Log
        </Link>
      </div>
      <div className="right menu">
        <div className="item">
          <Link
            to="/"
          >
            Log In
          </Link>
        </div>
        <div className="item">
          <Link
            to="/"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    <div className="ui container">
      {props.children}
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
