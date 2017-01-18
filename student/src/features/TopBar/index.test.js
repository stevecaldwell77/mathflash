import { mapState } from './';

test('mapState', () => {
    const state = {
        entities: {
            students: {
                1: {
                    studentName: 'John Doe',
                },
                2: {
                    studentName: 'Jane Doe',
                },
            },
        },
        session: {
            currentStudentId: 2,
        }
    };
    const result = mapState(state);
    expect(result).toEqual({
        currentStudentName: 'Jane Doe',
    });
});
