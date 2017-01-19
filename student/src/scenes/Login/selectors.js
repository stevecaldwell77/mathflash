import { createSelector } from 'reselect';
import { chain } from 'lodash';
import { getStudents as getStudentEntities } from '../../App/selectors';

const getSceneState = state => state.login || {};

export const getFormSubmitted = createSelector(
    getSceneState,
    state => state.formSubmitted,
);

export const getErrorMsg = createSelector(
    getSceneState,
    state => state.errorMsg,
);

export const getStudents = createSelector(
    getStudentEntities,
    students => chain(students)
        .values()
        .map(s => ({ id: s.studentId, name: s.studentName }))
        .sortBy('name')
        .value(),
);
