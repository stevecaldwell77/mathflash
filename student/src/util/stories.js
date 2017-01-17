import { identity, merge } from 'lodash';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const configureStore = (initialState) => createStore(
    identity,
    initialState,
);

const johnDoeId = 181311;

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
