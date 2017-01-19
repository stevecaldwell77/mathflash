import React from 'react';
import { connect } from 'react-redux';
import { toPairs, sortBy } from 'lodash';
import { getStudents, getFormSubmitted, getErrorMsg } from './selectors';
import Component from './Component';

const login = () => {};

const waiting = state => (
    (getStudents(state).length === 0) ||
    getFormSubmitted(state) ||
    false
);

export const mapState = (state) => ({
    waiting: waiting(state),
    students: getStudents(state),
    errorMsg: getErrorMsg(state),
});

const actions = {
    onStudentChange: login,
};

export default connect(
    mapState,
    actions,
)(Component);
