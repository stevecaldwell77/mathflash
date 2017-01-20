import { createSelector } from 'reselect';
import { getCurrentStudent } from '../../App/entities/selectors';

export const currentStudentName = createSelector(
    getCurrentStudent,
    student => student && student.get('studentName'),
);
