import { mapState } from './';

const testStudents = {
    1: {
        studentName: 'Joe',
    },
    2: {
        studentName: 'Jill',
    },
};

test('mapState: empty state', () => {
    const state = {};
    const result = mapState(state);
    expect(result).toEqual({
        students: [],
        waiting: true,
        errorMsg: undefined,
    });
});

test('mapState: students fetched', () => {
    const state = {
        entities: {
            students: testStudents,
        },
    };
    const result = mapState(state);
    expect(result).toEqual({
        students: [
            { id: "2", name: "Jill" },
            { id: "1", name: "Joe" },
        ],
        waiting: false,
        errorMsg: undefined,
    });
});

test('mapState: form submitted', () => {
    const state = {
        entities: {
            students: testStudents,
        },
        login: {
            formSubmitted: true,
        },
    };
    const result = mapState(state);
    expect(result).toEqual({
        students: [
            { id: "2", name: "Jill" },
            { id: "1", name: "Joe" },
        ],
        waiting: true,
        errorMsg: undefined,
    });
});

test('mapState: error', () => {
    const state = {
        entities: {
            students: testStudents,
        },
        login: {
            formSubmitted: false,
            errorMsg: 'There was an error',
        },
    };
    const result = mapState(state);
    expect(result).toEqual({
        students: [
            { id: "2", name: "Jill" },
            { id: "1", name: "Joe" },
        ],
        waiting: false,
        errorMsg: 'There was an error',
    });
});