import { all, fork } from 'redux-saga/effects';

import onLoadUsers from '~/sagas/loadUser';
import onCreateUser from './createUser';
import onDeleteUser from './deleteSaga';
import onEditUser from './editUser';
const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onEditUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
