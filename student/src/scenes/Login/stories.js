import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

const Component = require('./Component').default;

import "semantic-ui-css/semantic.css";

const students = [
    { id: 1, name: 'Isla' },
    { id: 2, name: 'Sean' },
    { id: 3, name: 'Kevin' },
];

const onStudentChange = action('student-chosen');

storiesOf('Login', module)
    .add('waiting', () => (
        <Component waiting students={[]} onStudentChange={onStudentChange} />
    ))
    .add('ready', () => (
        <Component students={students} onStudentChange={onStudentChange}/>
    ))
    .add('error', () => (
        <Component students={students} onStudentChange={onStudentChange}
            errorMsg="An Unknown Error Occurred"/>
    ));
