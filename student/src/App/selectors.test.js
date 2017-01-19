import {
    getCurrentStudent,
    getActiveCircuit,
    getPreviousCircuit,
} from './selectors';

test('getCurrentStudent: empty state', () => {
    const state = {};
    const result = getCurrentStudent(state);
    expect(result).toBe(undefined);
});

test('getCurrentStudent: no session', () => {
    const state = {
        entities: {
            students: {
                1: {
                    studentId: 1,
                    studentName: 'Joe Smith',
                }
            }
        }
    };
    const result = getCurrentStudent(state);
    expect(result).toBe(undefined);
});

test('getCurrentStudent: no students', () => {
    const state = {
        session: {
            currentStudentId: 1,
        }
    };
    const result = getCurrentStudent(state);
    expect(result).toBe(undefined);
});

test('getCurrentStudent: match', () => {
    const state = {
        entities: {
            students: {
                1: {
                    studentId: 1,
                    studentName: 'Joe Smith',
                },
                2: {
                    studentId: 2,
                    studentName: 'Jane Johnson',
                },
            }
        },
        session: {
            currentStudentId: 2,
        },
    };
    const result = getCurrentStudent(state);
    expect(result).toEqual({
        studentId: 2,
        studentName: 'Jane Johnson',
    });
});

test('getActiveCircuit: empty state', () => {
    const state = {};
    const result = getActiveCircuit(state);
    expect(result).toBe(undefined);
});

test('getActiveCircuit: no circuits', () => {
    const state = {
        entities: {
            circuits: {

            },
        },
    };
    const result = getActiveCircuit(state);
    expect(result).toBe(undefined);
});

test('getActiveCircuit: no active circuits', () => {
    const state = {
        entities: {
            circuits: {
                1: {
                    startTime: 1,
                    endTime: 5,
                },
            },
        },
    };
    const result = getActiveCircuit(state);
    expect(result).toBe(undefined);
});

test('getActiveCircuit: match', () => {
    const state = {
        entities: {
            circuits: {
                1: {
                    startTime: 1,
                },
                2: {
                    startTime: 5,
                },
            },
        },
    };
    const result = getActiveCircuit(state);
    expect(result).toEqual({
        startTime: 5,
    });
});

test('getPreviousCircuit: match', () => {
    const state = {
        entities: {
            circuits: {
                1: {
                    startTime: 1,
                    endTime: 4,
                },
                2: {
                    startTime: 5,
                    endTime: 10,
                },
                3: {
                    startTime: 15,
                },
            },
        },
    };
    const result = getPreviousCircuit(state);
    expect(result).toEqual({
        startTime: 5,
        endTime: 10,
    });
});
