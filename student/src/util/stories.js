import { identity, merge } from 'lodash';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const configureStore = (initialState) => createStore(
    identity,
    initialState,
);

const johnDoeId = 181311;

export const loadStudents = (state = {}) => merge(
    {},
    state,
    {
        entities: {
            students: {
                1: {
                    studentName: 'Isla',
                },
                2: {
                    studentName: 'Sean',
                },
                3: {
                    studentName: 'Kevin',
                },
            }
        },
        login: {
            studentsLoaded: true
        },
    },
);

export const addPrevCircuit = (state = {}) => merge(
    {},
    state,
    {
        entities: {
            circuits: {
                1: {
                    startTime: 1484599405,
                    endTime: 1484599405 + 60000,
                    numCompleted: 24,
                },
            },
        }
    },
);

export const loginJohnDoe = (state = {}) => merge(
    {},
    state,
    {
        entities: {
            students: {
                [johnDoeId]: {
                    studentName: 'John Doe',
                }
            }
        },
        session: {
            currentStudentId: johnDoeId,
        },
    },
);

export const StoryProvider = (props) => (
    <Provider store={configureStore(props.state)}>
        {props.children}
    </Provider>
);
