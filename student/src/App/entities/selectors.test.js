import { fromJS } from 'immutable';
import {
    getCurrentStudent,
    getActiveCircuit,
    getPreviousCircuit,
} from './selectors';

test('getCurrentStudent: empty state', () => {
    const state = fromJS({});
    const result = getCurrentStudent(state);
    expect(result).toBe(undefined);
});

test('getCurrentStudent: no session', () => {
    const state = fromJS({
        entities: {
            students: {
                '1': {
                    studentId: '1',
                    studentName: 'Joe Smith',
                }
            }
        }
    });
    const result = getCurrentStudent(state);
    expect(result).toBe(undefined);
});

test('getCurrentStudent: no students', () => {
    const state = fromJS({
        session: {
            currentStudentId: '1',
        }
    });
    const result = getCurrentStudent(state);
    expect(result).toBe(undefined);
});

test('getCurrentStudent: match', () => {
    const state = fromJS({
        entities: {
            students: {
                '1': {
                    studentId: '1',
                    studentName: 'Joe Smith',
                },
                '2': {
                    studentId: '2',
                    studentName: 'Jane Johnson',
                },
            }
        },
        session: {
            currentStudentId: '2',
        },
    });
    const result = getCurrentStudent(state);
    expect(result.toJS()).toEqual({
        studentId: '2',
        studentName: 'Jane Johnson',
    });
});

test('getActiveCircuit: empty state', () => {
    const state = fromJS({});
    const result = getActiveCircuit(state);
    expect(result).toBe(undefined);
});

test('getActiveCircuit: no circuits', () => {
    const state = fromJS({
        entities: {
            circuits: {
            },
        },
    });
    const result = getActiveCircuit(state);
    expect(result).toBe(undefined);
});

test('getActiveCircuit: no active circuits', () => {
    const state = fromJS({
        entities: {
            circuits: {
                '1': {
                    startTime: 1,
                    endTime: 5,
                },
            },
        },
    });
    const result = getActiveCircuit(state);
    expect(result).toBe(undefined);
});

test('getActiveCircuit: match', () => {
    const state = fromJS({
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
    });
    const result = getActiveCircuit(state);
    expect(result.toJS()).toEqual({
        startTime: 5,
    });
});

test('getPreviousCircuit: match', () => {
    const state = fromJS({
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
    });
    const result = getPreviousCircuit(state);
    expect(result.toJS()).toEqual({
        startTime: 5,
        endTime: 10,
    });
});
