import {
    NEW_PROBLEM,
    NEW_PROBLEM_READY,
    STOP_CIRCUIT,
} from './constants';

export const newProblem = () => ({
    type: NEW_PROBLEM,
});

export const newProblemReady = (problem) => ({
    type: NEW_PROBLEM_READY,
    problem,
});

export const stopCircuit = (circuitId) => ({
    type: STOP_CIRCUIT,
    timestamp: Date.now(),
    circuitId,
});
