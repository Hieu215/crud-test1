import { all, fork } from 'redux-saga/effects';

import onLoadUsers from '~/sagas/loadUser';
import onCreateUser from './createUser';
import onDeleteUser from './deleteSaga';
import onEditUser from './editUser';
import onGetUser from './getUser';
import onRegisterUser from './registerUser';
import onLoginAccount from './loginAccount';
const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onEditUser),
  fork(onGetUser),
  fork(onRegisterUser),
  fork(onLoginAccount),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
