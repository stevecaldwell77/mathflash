import { connect } from 'react-redux';
import {
    getStopRequested,
    getLoadingProblem,
    getCurrentProblem,
    getNumCompleted,
    getStartTime,
} from './selectors';
import Component from './Component';

const stop = () => {};

const elapsed = (state, asOf = Date.now) => asOf - getStartTime(state);

const waiting = state => (
    getStopRequested(state) ||
    getLoadingProblem(state) ||
    false
);

export const mapState = (state, options = {}) => {
    const { asOf } = options;
    return {
        elapsed: elapsed(state, asOf),
        numCompleted: getNumCompleted(state),
        problem: getCurrentProblem(state),
        waiting: waiting(state),
    };
};

const actions = {
    onStop: stop,
};

export default connect(
    mapState,
    actions,
)(Component);
