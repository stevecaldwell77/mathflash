import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { StoryProvider, loginJohnDoe } from '../util/stories';
import TopBar from './TopBar';

import "semantic-ui-css/semantic.css";

const onLogoutClick = action('logout-click');

storiesOf('TopBar', module)
    .add('John Doe', () => (
        <StoryProvider state={loginJohnDoe({})}>
            <TopBar onLogoutClick={onLogoutClick} />
        </StoryProvider>
    ));
