import { connect } from 'react-redux';
import { getCircuitRequested, getPrevCircuit } from './selectors';
import Component from './Component';

const start = () => {};

const waiting = state => (
    getCircuitRequested(state) ||
    false
);

export const mapState = (state) => ({
    waiting: waiting(state),
    prevCircuit: getPrevCircuit(state),
});

const actions = {
    onStart: start,
};

export default connect(
    mapState,
    actions,
)(Component);
