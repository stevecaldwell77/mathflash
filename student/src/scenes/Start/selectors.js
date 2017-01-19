import { createSelector } from 'reselect';
import {
    getPreviousCircuit as getPrevCircuitEntity
} from '../../App/selectors';

const getSceneState = state => state.start || {};

export const getCircuitRequested = createSelector(
    getSceneState,
    state => state.circuitRequested,
);

export const getPrevCircuit = createSelector(
    getPrevCircuitEntity,
    (circuit) => circuit && {
        numCompleted: circuit.numCompleted,
        elapsed: circuit.endTime - circuit.startTime,
    },
);
