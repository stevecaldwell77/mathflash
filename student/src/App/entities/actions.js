import {
    LOAD_STUDENTS,
    LOAD_STUDENTS_SUCCESS,
    CIRCUIT_READY,
    CIRCUIT_CLOSED,
} from './constants';

export const loadStudents = () => ({
    type: LOAD_STUDENTS,
});

export const loadStudentsSuccess = (students) => ({
    type: LOAD_STUDENTS_SUCCESS,
    students,
});

export const circuitReady = (circuit) => ({
    type: CIRCUIT_READY,
    circuit,
});

export const circuitClosed = (circuit) => ({
    type: CIRCUIT_CLOSED,
    circuit,
});
