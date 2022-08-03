import { takeEvery, put, call } from 'redux-saga/effects';
import { loadUsersSucces, loadUsersFail } from '~/actions';
import { loadUsersApi } from '~/api';
import { USERS } from '~/constants';

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield put(loadUsersSucces(response.data));
    }
  } catch (error) {
    yield put(loadUsersFail(error.toString()));
  }
}
export default function* onLoadUsers() {
  yield takeEvery(USERS.LOAD, onLoadUsersStartAsync);
}
