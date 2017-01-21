import { fromJS } from 'immutable';

const initialState = fromJS({
    stopRequested: false,
    loadingProblem: false,
    tickTime: undefined,
    startTime: undefined,
    numCompleted: undefined,
    currentProblem: undefined,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;
