import { createSelector } from 'reselect';
import { chain } from 'lodash';
import { fromJS } from 'immutable';
import { getCurrentStudentId } from '../session/selectors';

const getEntities = state => state.get('entities');

export const getStudents = createSelector(
    getEntities,
    entities => entities && entities.get('students'),
);

export const getNumStudents = createSelector(
    getStudents,
    students => students.count(),
);

export const getCircuits = createSelector(
    getEntities,
    entities => entities && entities.get('circuits'),
);

export const getCurrentStudent = createSelector(
    getCurrentStudentId,
    getStudents,
    (studentId, students) => studentId && students && students.get(studentId),
);

export const getCircuitById = (state, circuitId) =>
    getCircuits(state).get(circuitId);

export const getActiveCircuit = createSelector(
    getCircuits,
    circuits => circuits && fromJS(
        chain(circuits.toJS())
            .values()
            .filter(c => !c.endTime)
            .sortBy(c => c.startTime)
            .last()
            .value()
    ),
);

export const getPreviousCircuit = createSelector(
    getCircuits,
    circuits => circuits && fromJS(
        chain(circuits.toJS())
            .values()
            .filter(c => c.endTime)
            .sortBy(c => c.startTime)
            .last()
            .value()
    )
);
