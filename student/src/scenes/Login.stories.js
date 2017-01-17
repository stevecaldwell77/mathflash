import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { StoryProvider, loadStudents } from '../util/stories';
import Login from './Login';

import "semantic-ui-css/semantic.css";

const studentsLoaded = {
    login: {
        studentsLoaded: true
    },
};

storiesOf('Login', module)
    .add('fetching students', () => (
        <StoryProvider state={{}}>
            <Login/>
        </StoryProvider>
    ))
    .add('students fetched', () => (
        <StoryProvider state={loadStudents({})}>
            <Login/>
        </StoryProvider>
    ));
