import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import { logout } from '../../App/actions';
import { currentStudentName } from './selectors';
import Component from './Component';

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
