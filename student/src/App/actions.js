import {
    LOGOUT,
    LOGOUT_COMPLETE,
} from './constants';

export const logout = () => ({
    type: LOGOUT,
});

export const logoutComplete = () => ({
    type: LOGOUT_COMPLETE,
});
