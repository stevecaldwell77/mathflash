import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    LOGOUT_COMPLETE,
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

export const logout = () => ({
    type: LOGOUT,
});

export const logoutComplete = () => ({
    type: LOGOUT_COMPLETE,
});
