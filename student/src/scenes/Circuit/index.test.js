import { fromJS } from 'immutable';
import { mapState } from './';

const testCircuits = {
    1: {
        circuitId: 1,
        startTime: 10000,
        endTime: 70000,
        numCompleted: 24,
    },
    2: {
        circuitId: 2,
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
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        circuitId: 2,
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
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        circuitId: 2,
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
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        circuitId: 2,
        numCompleted: 12,
        problem: {
            firstNumber: '2',
            secondNumber: '8',
            operator: '+',
        },
        waiting: true,
    });
});
