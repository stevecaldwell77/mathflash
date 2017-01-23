import { connect } from 'react-redux';
import {
    getElapsed,
} from './selectors';
import Component from './Component';

export const mapState = (state) => ({
    elapsed: getElapsed(state),
});

export default connect(
    mapState,
)(Component);
