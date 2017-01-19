import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

import Login from '../scenes/Login';
// import Start from '../scenes/Start';
// import Circuit from '../scenes/Circuit';

export const mapState = state => ({
    Scene: Login,
});

export const Component = ({ Scene }) => <Scene />
Component.propTypes = {
    Scene: React.PropTypes.func.isRequired,
};

export default connect(
    mapState,
)(Component);
