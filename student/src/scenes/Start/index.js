import { connect } from 'react-redux';
import { getWaitingForCircuit, getPrevCircuit } from './selectors';
import { start } from './actions';
import Component from './Component';

export const mapState = (state) => ({
    waiting: getWaitingForCircuit(state) || false,
    prevCircuit: getPrevCircuit(state),
});

const actions = {
    onStart: start,
};

export default connect(
    mapState,
    actions,
)(Component);
