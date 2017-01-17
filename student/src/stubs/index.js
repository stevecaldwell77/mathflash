import { setStubbingMode, stub } from 'react-stubber';
setStubbingMode(true);

export const stubTopBarContainer = () => {
    const Container = require('../features/TopBarContainer').default;
    const Stub = require('../stubs/TopBarContainer').default;
    stub(Container, Stub);
};
