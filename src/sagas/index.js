import { all, fork } from 'redux-saga/effects';

import onLoadUsers from '~/sagas/loadUser';

const userSagas = [fork(onLoadUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
