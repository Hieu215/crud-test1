import { takeEvery, put, call } from 'redux-saga/effects';
import { loginAcountSucces, loginAcountFail } from '~/actions';
import { loginAccountApi } from '~/api';
import { LOGIN } from '~/constants';

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
export default function* onLoginAccount() {
  yield takeEvery(LOGIN.START, onLoginAccountStartAsync);
}
