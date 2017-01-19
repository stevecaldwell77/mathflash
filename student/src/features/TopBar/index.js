import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import { currentStudentName } from './selectors';
import Component from './Component';

const logout = () => {};

export const mapState = state => ({
    currentStudentName: currentStudentName(state),
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
