import { fromJS } from 'immutable';
import { mapState } from './';
import { CIRCUIT_TIME } from './constants';

const circuitTimeMilli = CIRCUIT_TIME * 1000;

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

test('mapState: elapsed w/o tickTime', () => {
    const state = fromJS({
        entities: {
            circuits: testCircuits,
        },
        circuit: {
            timer: {
                tickTime: undefined,
            },
        },
    });
    const result = mapState(state);
    expect(result.elapsed).toBeDefined();
    expect(result.elapsed).toBeGreaterThanOrEqual(0);
});

test('mapState: elapsed w/ tickTime', () => {
    const state = fromJS({
        entities: {
            circuits: testCircuits,
        },
        circuit: {
            timer: {
                tickTime: 100000 + (circuitTimeMilli * 0.25),
            },
        },
    });
    const result = mapState(state);
    expect(result).toEqual({
        elapsed: 25,
    });
});
