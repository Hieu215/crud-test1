import { all, fork } from 'redux-saga/effects';

import onLoadUsers from '~/sagas/loadUser';
import onCreateUser from './createUser';
import onDeleteUser from './deleteSaga';
import onEditUser from './editUser';
import onGetUser from './getUser';
const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onEditUser), fork(onGetUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
