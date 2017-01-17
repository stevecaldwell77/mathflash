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
