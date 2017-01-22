import {
    LOAD_STUDENTS,
    LOAD_STUDENTS_SUCCESS,
    CIRCUIT_CLOSED,
} from './constants';

export const loadStudents = () => ({
    type: LOAD_STUDENTS,
});

export const loadStudentsSuccess = (students) => ({
    type: LOAD_STUDENTS_SUCCESS,
    students,
});

export const circuitClosed = (circuit) => ({
    type: CIRCUIT_CLOSED,
    circuit,
});
