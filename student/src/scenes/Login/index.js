import React from 'react';
import { connect } from 'react-redux';
import { toPairs, sortBy } from 'lodash';
import Component from './Component';

const login = () => {};

export const mapState = (state) => {
    let students = [];
    if (state.entities && state.entities.students) {
        const studentEntities = state.entities.students;
        students = toPairs(studentEntities).map(([id, obj]) => ({
            id,
            name: obj.studentName,
        }));
        students = sortBy(students, 'name');
    }

    let waiting = false;
    if (students.length === 0) {
        waiting = true;
    } else if (state.login) {
        waiting = state.login.formSubmitted;
    }

    let errorMsg;
    if (state.login) {
        errorMsg = state.login.errorMsg;
    }

    return {
        waiting,
        students,
        errorMsg,
    };
};

const actions = {
    onStudentChange: login,
};

export default connect(
    mapState,
    actions,
)(Component);
