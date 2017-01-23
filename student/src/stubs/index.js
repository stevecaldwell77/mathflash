import { setStubbingMode, stub } from 'react-stubber';

export const stubTopBar = () => {
    setStubbingMode(true);
    const Container = require('../features/TopBar/index').default;
    const Stub = require('../stubs/TopBar').default;
    stub(Container, Stub);
};

export const stubCircuitTimer = () => {
    setStubbingMode(true);
    const Container = require('../scenes/Circuit/Timer/index').default;
    const Stub = require('../stubs/CircuitTimer').default;
    stub(Container, Stub);
};
