import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

const mapState = ({ login = {} }) => ({
    studentsLoaded: login.studentsLoaded,
});

export default connect(
    mapState,
)(Login);
