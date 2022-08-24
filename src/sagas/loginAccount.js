import { put, call, takeLatest } from 'redux-saga/effects';

import { loginAcountSucces, loginAcountFail } from '~/actions';
import { loginAccountApi } from '~/api';

import { LOGIN, LOGOUT } from '~/constants';

import { logOutAcountSucces, logOutAcountFail } from '~/actions';
import { logOutAccountApi } from '~/api';

export function* onLoginAccountStartAsync({ payload }) {
  try {
    const response = yield call(loginAccountApi, payload);
    if (response.status === 200) {
      yield put(loginAcountSucces(response.data));
    }
  } catch (error) {
    yield put(loginAcountFail(error.toString()));
  }
}
export function* onLogOutAccountStartAsync() {
  try {
    const response = yield call(logOutAccountApi);
    if (response.status === 200) {
      yield put(logOutAcountSucces());
    }
  } catch (error) {
    yield put(logOutAcountFail());
  }
}
export default function* onLoginAccount() {
  yield takeLatest(LOGIN.START, onLoginAccountStartAsync);
  yield takeLatest(LOGOUT.START, onLoginAccountStartAsync);
}
