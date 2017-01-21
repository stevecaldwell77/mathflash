import {
    NEW_PROBLEM,
    NEW_PROBLEM_READY,
    CIRCUIT_TICK,
    STOP_CIRCUIT,
    CIRCUIT_COMPLETE,
} from './constants';

export const newProblem = () => ({
    type: NEW_PROBLEM,
});

export const newProblemReady = (problem) => ({
    type: NEW_PROBLEM_READY,
    problem,
});

export const circuitTick = () => ({
    type: CIRCUIT_TICK,
});

export const stopCircuit = () => ({
    type: STOP_CIRCUIT,
});

export const circuitComplete = () => ({
    type: CIRCUIT_COMPLETE,
});
