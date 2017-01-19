import React from 'react';
import { connect } from 'react-redux';
import { getActiveCircuit, getCurrentStudent } from './selectors';
import Login from '../scenes/Login';
import Start from '../scenes/Start';
import Circuit from '../scenes/Circuit';

const chooseScene = state =>
    getActiveCircuit(state)    ? Circuit
    : getCurrentStudent(state) ? Start
                               : Login;

export const mapState = state => ({
    Scene: chooseScene(state),
});

export const Component = ({ Scene }) => <Scene />
Component.propTypes = {
    Scene: React.PropTypes.func.isRequired,
};

export default connect(
    mapState,
)(Component);
