import entitiesSaga from './entities/saga';
import sessionSaga from './session/saga';
import loginSaga from '../scenes/Login/saga';
// import startSceneSaga from '../scenes/Start/saga';

export default function* rootSaga() {
    yield [
        entitiesSaga(),
        sessionSaga(),
        loginSaga(),
        // startSceneSaga(),
    ]
}
