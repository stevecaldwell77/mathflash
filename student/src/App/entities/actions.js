import {
    LOAD_STUDENTS,
    LOAD_STUDENTS_SUCCESS,
} from './constants';

export const loadStudents = () => ({
    type: LOAD_STUDENTS,
});

export const loadStudentsSuccess = (students) => ({
    type: LOAD_STUDENTS_SUCCESS,
    students,
});
