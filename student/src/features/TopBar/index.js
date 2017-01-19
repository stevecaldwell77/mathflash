import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import { getCurrentStudent } from '../../App/selectors';
import Component from './Component';

const logout = () => {};

export const mapState = state => {
    const student = getCurrentStudent(state) || {};
    return {
        currentStudentName: student.studentName,
    }
};

const actions = {
    onLogoutClick: logout,
};

export default mayBeStubbed(
    connect(
        mapState,
        actions,
    )(Component)
);
