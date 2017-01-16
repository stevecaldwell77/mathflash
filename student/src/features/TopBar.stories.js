import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TopBar from './TopBar';

import "semantic-ui-css/semantic.css";

const onLogoutClick = action('logout-click');

storiesOf('TopBar', module)
    .add('John Doe', () => (
        <TopBar currentStudentName='John Doe' onLogoutClick={onLogoutClick}/>
    ));
