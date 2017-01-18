import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

const login = () => {};

const mapState = (state) => {
    let students = [];
    if (state.entities && state.entities.students) {
        const studentEntities = state.entities.students;
        students = toPairs(studentEntities).map(([id, obj]) => ({
            id,
            name: obj.studentName,
        }));
    }

    let waiting;
    if (!students) {
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
)(Login);
