import { connect } from 'react-redux';
import {
    getStopRequested,
    getLoadingProblem,
    getCircuitId,
    getCurrentProblem,
    getNumCompleted,
} from './selectors';
import { stopCircuit } from './actions';
import Component from './Component';

const waiting = state => (
    getStopRequested(state) ||
    getLoadingProblem(state) ||
    false
);

export const mapState = (state) => ({
    circuitId: getCircuitId(state),
    numCompleted: getNumCompleted(state),
    problem: getCurrentProblem(state),
    waiting: waiting(state),
});

const actions = {
    onStop: stopCircuit,
};

export default connect(
    mapState,
    actions,
)(Component);
