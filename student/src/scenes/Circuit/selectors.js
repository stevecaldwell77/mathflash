import { createSelector } from 'reselect';
import { getActiveCircuit } from '../../App/selectors';

const getSceneState = state => state.circuit || {};

export const getStopRequested = createSelector(
    getSceneState,
    state => state.stopRequested,
);

export const getLoadingProblem = createSelector(
    getSceneState,
    state => state.loadingProblem,
);

export const getCurrentProblem = createSelector(
    getActiveCircuit,
    circuit => circuit.currentProblem,
);

export const getNumCompleted = createSelector(
    getActiveCircuit,
    circuit => circuit.numCompleted,
);

export const getStartTime = createSelector(
    getActiveCircuit,
    circuit => circuit.startTime,
);
