import { noop } from 'lodash';
import React from 'react';
const TopBar = require('../features/TopBar/Component').default;

export default () => <TopBar currentStudentName='John Doe' onLogoutClick={noop}/>;
