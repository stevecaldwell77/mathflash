import { toPairs } from 'lodash';
import { connect } from 'react-redux';
import Component from './Component';

const start = () => {};

const getPrevCircuit = state => {
    if (!state.entities) return undefined;
    if (!state.entities.circuits) return undefined;
    return toPairs(state.entities.circuits).reduce((prev, [id, circuit]) => {
        if (!prev) return circuit;
        if (!prev.endTime) return circuit;
        if (!circuit.endTime) return prev;
        if (circuit.startTime > prev.startTime) return circuit;
        return prev;
    }, undefined);
};

const mapState = (state) => {
    let circuitRequested;
    if (state.start) {
        circuitRequested = state.start.circuitRequested;
    }

    let prevCircuit;
    const prevCircuitRecord = getPrevCircuit(state);
    if (prevCircuitRecord) {
        prevCircuit = {
            numCompleted: prevCircuitRecord.numCompleted,
            elapsed: prevCircuitRecord.endTime - prevCircuitRecord.startTime,
        };
    }

    return {
        circuitRequested,
        prevCircuit,
    };
};

const actions = {
    onStart: start,
};

export default connect(
    mapState,
    actions,
)(Component);
