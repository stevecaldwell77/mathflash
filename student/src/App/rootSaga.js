import entitiesSaga from './entities/saga';
import sessionSaga from './session/saga';
import startSceneSaga from '../scenes/Start/saga';
import circuitSaga from '../scenes/Circuit/saga';

export default function* rootSaga() {
    yield [
        entitiesSaga(),
        sessionSaga(),
        startSceneSaga(),
        circuitSaga(),
    ]
}
