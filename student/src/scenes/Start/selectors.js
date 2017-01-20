import { createSelector } from 'reselect';
import {
    getPreviousCircuit as getPrevCircuitEntity
} from '../../App/entities/selectors';

const getSceneState = state => state.get('start');

export const getWaitingForCircuit = createSelector(
    getSceneState,
    state => state && state.get('waitingForCircuit'),
);

const elapsed = circuit => (
    circuit.get('endTime')
    - circuit.get('startTime')
);

export const getPrevCircuit = createSelector(
    getPrevCircuitEntity,
    (circuit) => circuit && {
        numCompleted: circuit.get('numCompleted'),
        elapsed: elapsed(circuit),
    },
);
