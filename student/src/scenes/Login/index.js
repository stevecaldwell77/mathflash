import { connect } from 'react-redux';
import {
    getStudents,
    getFormSubmitted,
    getErrorMsg,
} from './selectors';
import { getLoggingOut } from '../../App/session/selectors';
import { login } from '../../App/session/actions';
import Component from './Component';

const waiting = state => (
    getFormSubmitted(state) ||
    getLoggingOut(state) ||
    false
);

export const mapState = (state) => ({
    waiting: waiting(state),
    students: getStudents(state),
    errorMsg: getErrorMsg(state),
});

const mapDispatch = dispatch => ({
    onStudentChange: (e, { value }) => dispatch(login(value)),
});

export default connect(
    mapState,
    mapDispatch,
)(Component);
