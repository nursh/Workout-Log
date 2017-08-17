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
          <i className="book icon" />
          Workout Log
        </Link>
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
