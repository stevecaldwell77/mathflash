import React from 'react';
import { Progress } from "semantic-ui-react";

const elapsedColor = elapsed => (
     elapsed  > 100 - 6.25 ? 'red'
    : elapsed > 100 - 12.5 ? 'orange'
    : elapsed > 100 - 25   ? 'yellow'
    : elapsed > 100 - 50   ? 'olive'
                           : 'green'
);

const Component = ({ elapsed }) => (
    <Progress size="small" percent={elapsed} color={elapsedColor(elapsed)} />
);

Component.propTypes = {
    elapsed: React.PropTypes.number.isRequired,
};

export default Component;
