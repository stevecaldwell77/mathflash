import {
    START_CIRCUIT,
    CIRCUIT_READY,
} from './constants';

export const start = () => ({
    type: START_CIRCUIT,
});

export const circuitReady = (circuit) => ({
    type: CIRCUIT_READY,
    circuit,
});
