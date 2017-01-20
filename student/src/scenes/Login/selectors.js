import { createSelector } from 'reselect';
import { chain } from 'lodash';
import {
    getSession,
    getStudents as getStudentEntities,
} from '../../App/selectors';

const getSceneState = state => state.get('login');

export const getFormSubmitted = createSelector(
    getSceneState,
    state => state && state.get('formSubmitted'),
);

export const getErrorMsg = createSelector(
    getSceneState,
    state => state && state.get('errorMsg'),
);

export const getStudents = createSelector(
    getStudentEntities,
    students => students ?
        chain(students.toJS())
            .values()
            .map(s => ({ id: s.studentId, name: s.studentName }))
            .sortBy('name')
            .value()
        : []
);

export const getLoggingOut = createSelector(
    getSession,
    session => session.get('loggingOut'),
);
