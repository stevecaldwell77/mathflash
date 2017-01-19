import { createSelector } from 'reselect';
import { chain, get } from 'lodash';

const getSession = state => get(state, 'session', {});
const getCurrentStudentId = state => getSession(state).currentStudentId;

const getEntities = state => get(state, 'entities', {});

export const getStudents = state => get(getEntities(state), 'students', {});

export const getCircuits = state => get(getEntities(state), 'circuits', {});

export const getCurrentStudent = createSelector(
    getCurrentStudentId,
    getStudents,
    (studentId, students) => studentId && students[studentId]
);

export const getActiveCircuit = createSelector(
    getCircuits,
    circuits => chain(circuits)
        .values()
        .filter(c => !c.endTime)
        .sortBy(c => c.startTime)
        .last()
        .value()
);

export const getPreviousCircuit = createSelector(
    getCircuits,
    circuits => chain(circuits)
        .values()
        .filter(c => c.endTime)
        .sortBy(c => c.startTime)
        .last()
        .value()
);
