import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Component from './Component';

import "semantic-ui-css/semantic.css";

const onLogoutClick = action('logout-click');

storiesOf('TopBar', module)
    .add('John Doe', () => (
        <Component currentStudentName='John Doe' onLogoutClick={onLogoutClick}/>
    ));
