import { setStubbingMode, stub } from 'react-stubber';

export const stubTopBar = () => {
    setStubbingMode(true);
    const Container = require('../features/TopBar/index').default;
    const Stub = require('../stubs/TopBar').default;
    stub(Container, Stub);
};
