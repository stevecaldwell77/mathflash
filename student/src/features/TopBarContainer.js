import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import TopBar from './TopBar';

const logout = () => {};

const currentStudent = state => state.entities.students[state.session.currentStudentId];

const mapState = state => ({
    currentStudentName: currentStudent(state).studentName,
});

const actions = {
    onLogoutClick: logout,
};

export default mayBeStubbed(
    connect(
        mapState,
        actions,
    )(TopBar)
);
