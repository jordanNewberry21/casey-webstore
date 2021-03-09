import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from  './registration.saga';
import userSaga from './user.saga';


// root.saga is where all the sagas will live to keep it all in one place
export default function* rootSaga() {
    yield all([
        loginSaga(),
        registrationSaga(),
        userSaga(),

    ]);
};