import { all, fork } from 'redux-saga/effects';

import onLoadUsers from '~/sagas/loadUser';
import onCreateUser from './createUser';

const userSagas = [fork(onLoadUsers), fork(onCreateUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
