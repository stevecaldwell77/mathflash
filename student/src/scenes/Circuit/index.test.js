import { fromJS } from 'immutable';
import { mapState } from './';
import { CIRCUIT_TIME } from './constants';

const circuitTimeMilli = CIRCUIT_TIME * 1000;

const testCircuits = {
    1: {
        startTime: 10000,
        endTime: 70000,
        numCompleted: 24,
    },
    2: {
        startTime: 100000,
        numCompleted: 12,
        currentProblem: {
            firstNumber: '2',
            secondNumber: '8',
            operator: '+',
        }
    },
};

test('mapState: showing problem', () => {
    const state = fromJS({
        entities: {
            circuits: testCircuits,
        },
        circuit: {
            tickTime: 100000 + (circuitTimeMilli * 0.25),
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        elapsed: 25,
        numCompleted: 12,
        problem: {
            firstNumber: '2',
            secondNumber: '8',
            operator: '+',
        },
        waiting: false,
    });
});

test('mapState: loading problem', () => {
    const state = fromJS({
        entities: {
            circuits: testCircuits,
        },
        circuit: {
            loadingProblem: true,
            tickTime: 100000 + (circuitTimeMilli * 0.5),
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        elapsed: 50,
        numCompleted: 12,
        problem: {
            firstNumber: '2',
            secondNumber: '8',
            operator: '+',
        },
        waiting: true,
    });
});

test('mapState: stopping', () => {
    const state = fromJS({
        entities: {
            circuits: testCircuits,
        },
        circuit: {
            stopRequested: true,
            tickTime: 100000 + (circuitTimeMilli * 0.75),
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        elapsed: 75,
        numCompleted: 12,
        problem: {
            firstNumber: '2',
            secondNumber: '8',
            operator: '+',
        },
        waiting: true,
    });
});
