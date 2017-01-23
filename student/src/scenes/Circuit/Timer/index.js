import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import {
    getElapsed,
} from './selectors';
import Component from './Component';

export const mapState = (state) => ({
    elapsed: getElapsed(state),
});

export default mayBeStubbed(
    connect(
        mapState,
    )(Component)
);
