import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import Component from './Component';

const logout = () => {};

const currentStudent = state => state.entities.students[state.session.currentStudentId];

export const mapState = state => ({
    currentStudentName: currentStudent(state).studentName,
});

const actions = {
    onLogoutClick: logout,
};

export default mayBeStubbed(
    connect(
        mapState,
        actions,
    )(Component)
);
