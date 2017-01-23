import { createSelector } from 'reselect';
import { getActiveCircuit } from '../../../App/entities/selectors';
import { CIRCUIT_TIME } from '../constants';

const getTimerState = state => state.getIn(['circuit', 'timer']);

export const getTickTime = createSelector(
    getTimerState,
    state => state && state.get('tickTime'),
);

export const getStartTime = createSelector(
    getActiveCircuit,
    circuit => circuit && circuit.get('startTime'),
);

export const getElapsed = (state) => {
    const start = getStartTime(state);
    const asOf = getTickTime(state) || Date.now();
    return start && (((asOf - start) / (CIRCUIT_TIME * 1000)) * 100);
}
