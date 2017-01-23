import { connect } from 'react-redux';
import {
    getStopRequested,
    getLoadingProblem,
    getCircuitId,
    getCurrentProblem,
    getNumCompleted,
    getStartTime,
    getTickTime,
    getElapsed,
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
    elapsed: getElapsed(state),
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
