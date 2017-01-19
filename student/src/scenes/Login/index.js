import { connect } from 'react-redux';
import { getStudents, getFormSubmitted, getErrorMsg } from './selectors';
import { login } from './actions';
import Component from './Component';

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
