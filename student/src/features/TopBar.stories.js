import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { StoryProvider, configureStore, loginJohnDoe } from '../util/stories';
import TopBar from './TopBar';

import "semantic-ui-css/semantic.css";

const onLogoutClick = action('logout-click');

const store = configureStore(loginJohnDoe, {});

storiesOf('TopBar', module)
    .add('John Doe', () => (
        <StoryProvider store={store}>
            <TopBar onLogoutClick={onLogoutClick} />
        </StoryProvider>
    ));
