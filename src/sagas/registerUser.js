import { put, call, takeLatest } from 'redux-saga/effects';
import { registerAccountFail, registerAccountSucces } from '~/actions';
import { registerUserApi } from '~/api';
import { REGISTER } from '~/constants';

export function* onRegisterUsersStartAsync({ payload }) {

  try {
    const response = yield call(registerUserApi, payload);
    if (response.status === 200) {
      yield put(registerAccountSucces(response.data));
    }
  } catch (error) {
    yield put(registerAccountFail(error.toString()));
  }
}
export default function* onRegisterUser() {
  yield takeLatest(REGISTER.START, onRegisterUsersStartAsync);
}
