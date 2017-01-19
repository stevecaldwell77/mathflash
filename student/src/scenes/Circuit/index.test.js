import { fromJS } from 'immutable';
import { mapState } from './';

const testCircuits = {
    1: {
        startTime: 1484770000000,
        endTime: 1484770060000,
        numCompleted: 24,
    },
    2: {
        startTime: 1484770120000,
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
    const result = mapState(state, { asOf: 1484770140000 });
    expect(result).toEqual({
        elapsed: 20000,
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
    const result = mapState(state, { asOf: 1484770145000 });
    expect(result).toEqual({
        elapsed: 25000,
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
    const result = mapState(state, { asOf: 1484770150000 });
    expect(result).toEqual({
        elapsed: 30000,
        numCompleted: 12,
        problem: {
            firstNumber: '2',
            secondNumber: '8',
            operator: '+',
        },
        waiting: true,
    });
});
