import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

const Login = require('./Login').default;

import "semantic-ui-css/semantic.css";

const students = [
    { id: 1, name: 'Isla' },
    { id: 2, name: 'Sean' },
    { id: 3, name: 'Kevin' },
];

const onStudentChange = action('student-chosen');

storiesOf('Login', module)
    .add('waiting', () => (
        <Login waiting onStudentChange={onStudentChange} />
    ))
    .add('ready', () => (
        <Login students={students} onStudentChange={onStudentChange}/>
    ))
    .add('error', () => (
        <Login students={students} onStudentChange={onStudentChange}
            errorMsg="An Unknown Error Occurred"/>
    ));
