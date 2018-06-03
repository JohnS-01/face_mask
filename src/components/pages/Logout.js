import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <p>You are now logged out. Click <Link to="/login">here</Link> to log back in.</p>
        <br />
        <br />
        <br />
      </div>
    )
  };
};

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default Logout;
