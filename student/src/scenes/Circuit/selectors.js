import { createSelector } from 'reselect';
import { getActiveCircuit } from '../../App/selectors';

const getSceneState = state => state.get('circuit');

export const getStopRequested = createSelector(
    getSceneState,
    state => state && state.get('stopRequested'),
);

export const getLoadingProblem = createSelector(
    getSceneState,
    state => state && state.get('loadingProblem'),
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
