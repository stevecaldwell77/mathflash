import { createSelector } from 'reselect';

export const getSession = state => state.get('session');

export const getCurrentStudentId = createSelector(
    getSession,
    session => session && session.get('currentStudentId'),
);

export const getLoggingOut = createSelector(
    getSession,
    session => session && session.get('loggingOut'),
);
