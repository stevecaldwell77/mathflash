import {
    LOAD_STUDENTS,
    LOAD_STUDENTS_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from './constants';

export const loadStudents = () => ({
    type: LOAD_STUDENTS,
});

export const loadStudentsSuccess = (students) => ({
    type: LOAD_STUDENTS_SUCCESS,
    students,
});

export const login = (studentId) => ({
    type: LOGIN,
    studentId,
});

export const loginSuccess = (studentId) => ({
    type: LOGIN_SUCCESS,
    studentId,
});

export const loginError = (errorMsg) => ({
    type: LOGIN_ERROR,
    errorMsg,
});
