import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { configureStore, StoryProvider, loadStudents } from '../util/stories';
import Login from './Login';

import "semantic-ui-css/semantic.css";

const studentsLoaded = {
    login: {
        studentsLoaded: true
    },
};

const storeFetching = configureStore({});
const storeFetched = configureStore(loadStudents, {});

const buildComponent = (store) => (
    <StoryProvider store={store}>
        <Login/>
    </StoryProvider>
);

storiesOf('Login', module)
    .add('fetching students', () => buildComponent(storeFetching))
    .add('students fetched', () => buildComponent(storeFetched));
