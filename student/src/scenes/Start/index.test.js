import { mapState } from './';

test('mapState: empty state', () => {
    const state = {};
    const result = mapState(state);
    expect(result).toEqual({
        waiting: false,
        prevCircuit: undefined,
    });
});

test('mapState: circuit requested', () => {
    const state = {
        start: {
            circuitRequested: true,
        },
    };
    const result = mapState(state);
    expect(result).toEqual({
        waiting: true,
        prevCircuit: undefined,
    });
});

test('mapState: prevCircuit', () => {
    const state = {
        entities: {
            circuits: {
                1: {
                    startTime: 1484764470000,
                    endTime: 1484764480000,
                    numCompleted: 18,
                },
                2: {
                    startTime: 1484764500000,
                    endTime: 1484764560000,
                    numCompleted: 25,
                },
                3: {
                    startTime: 1484764570000,
                    numCompleted: 7,
                },
            },
        },
    };
    const result = mapState(state);
    expect(result).toEqual({
        waiting: false,
        prevCircuit: {
            elapsed: 60000,
            numCompleted: 25,
        },
    });
});
