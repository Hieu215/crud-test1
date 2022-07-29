import { put, call, takeLatest } from 'redux-saga/effects';
import { createUserFail, createUserSucces } from '~/actions';
import { createUserApi } from '~/api';
import { CREATE_USER } from '~/constants';

export function* onCreateUsersStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 200) {
      yield put(createUserSucces(response.data));
    }
  } catch (error) {
    yield put(createUserFail(error.toString()));
  }
}
export default function* onCreateUser() {
  yield takeLatest(CREATE_USER.START, onCreateUsersStartAsync);
}
