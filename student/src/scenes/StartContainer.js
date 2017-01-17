import { toPairs } from 'lodash';
import { connect } from 'react-redux';
import Start from './Start';

const start = () => {};

const getPrevCircuit = state => {
    if (!state.entities) return undefined;
    if (!state.entities.circuits) return undefined;
    return toPairs(state.entities.circuits).reduce((prev, [id, circuit]) => {
        if (!prev.endTime) return circuit;
        if (!circuit.endTime) return prev;
        if (circuit.startTime > prev.startTime) return circuit;
        return prev;
    }, {});
};

const mapState = (state) => {
    let circuitRequested;
    if (state.start) {
        circuitRequested = state.start.circuitRequested;
    }

    return {
        circuitRequested,
        prevCircuit: getPrevCircuit(state),
    };
};

const actions = {
    onStart: start,
};

export default connect(
    mapState,
    actions,
)(Start);
