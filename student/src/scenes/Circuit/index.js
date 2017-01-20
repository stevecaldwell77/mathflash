import { connect } from 'react-redux';
import {
    getStopRequested,
    getLoadingProblem,
    getCurrentProblem,
    getNumCompleted,
    getStartTime,
    getTickTime,
} from './selectors';
import { CIRCUIT_TIME } from './constants';
import Component from './Component';

const stop = () => {};

const waiting = state => (
    getStopRequested(state) ||
    getLoadingProblem(state) ||
    false
);

const elapsed = (start, now) => now && start &&
    (((now - start) / (CIRCUIT_TIME * 1000)) * 100);

export const mapState = (state) => ({
    elapsed: elapsed(getStartTime(state), getTickTime(state)),
    numCompleted: getNumCompleted(state),
    problem: getCurrentProblem(state),
    waiting: waiting(state),
});

const actions = {
    onStop: stop,
};

export default connect(
    mapState,
    actions,
)(Component);
