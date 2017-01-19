import { fromJS } from 'immutable';
import { mapState } from './';

test('mapState', () => {
    const state = fromJS({
        entities: {
            students: {
                '1': {
                    studentName: 'John Doe',
                },
                '2': {
                    studentName: 'Jane Doe',
                },
            },
        },
        session: {
            currentStudentId: '2',
        }
    });
    const result = mapState(state);
    expect(result).toEqual({
        currentStudentName: 'Jane Doe',
    });
});
