import timerSaga from './Timer/saga';

export default function* saga() {
    yield [
        timerSaga(),
    ];
}
