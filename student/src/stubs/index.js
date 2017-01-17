import { setStubbingMode, stub } from 'react-stubber';

export const stubTopBarContainer = () => {
    setStubbingMode(true);
    const Container = require('../features/TopBarContainer').default;
    const Stub = require('../stubs/TopBarContainer').default;
    stub(Container, Stub);
};

export const stubLoginFormContainer = () => {
    setStubbingMode(true);
    const Container = require('../scenes/Login/LoginFormContainer').default;
    const Stub = require('../stubs/LoginFormContainer').default;
    stub(Container, Stub);
};
