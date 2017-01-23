import { createSelector } from 'reselect';
import { getActiveCircuit } from '../../App/entities/selectors';

const getSceneState = state => state.get('circuit');

export const getStopRequested = createSelector(
    getSceneState,
    state => state && state.get('stopRequested'),
);

export const getLoadingProblem = createSelector(
    getSceneState,
    state => state && state.get('loadingProblem'),
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
