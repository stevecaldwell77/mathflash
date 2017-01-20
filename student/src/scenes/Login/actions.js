import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from './constants';

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
