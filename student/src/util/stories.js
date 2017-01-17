import { clone, merge } from 'lodash';
import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

const johnDoeId = 181311;

export const configureStore = (...args) => {
    const initialState = args.pop();
    const transform = compose(...args);
    return createStore(
        clone,
        transform(initialState),
    );
};

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
    <Provider store={props.store}>
        {props.children}
    </Provider>
);
