import { put, call, take } from 'redux-saga/effects';
import { deleteUserSucces, deleteUserFail, loadUsers } from '~/actions';
import { deleteUserApi } from '~/api';
import { DELETE_USER } from '~/constants';

export function* onDeleteUsersStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield put(deleteUserSucces(userId));
      yield put(loadUsers());
    }
  } catch (error) {
    yield put(deleteUserFail(error.response.data));
  }
}
export default function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(DELETE_USER.START);
    yield call(onDeleteUsersStartAsync, userId);
  }
}
