import { createSelector } from 'reselect';
import { getActiveCircuit } from '../../App/entities/selectors';
import { CIRCUIT_TIME } from './constants';

const getSceneState = state => state.get('circuit');

export const getStopRequested = createSelector(
    getSceneState,
    state => state && state.get('stopRequested'),
);

export const getLoadingProblem = createSelector(
    getSceneState,
    state => state && state.get('loadingProblem'),
);

export const getTickTime = createSelector(
    getSceneState,
    state => state && state.get('tickTime'),
);

export const getCircuitId = createSelector(
    getActiveCircuit,
    circuit => circuit && circuit.get('circuitId'),
);

export const getCurrentProblem = createSelector(
    getActiveCircuit,
    circuit => circuit && circuit.get('currentProblem')
         && circuit.get('currentProblem').toJS(),
);

export const getNumCompleted = createSelector(
    getActiveCircuit,
    circuit => circuit && circuit.get('numCompleted'),
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
