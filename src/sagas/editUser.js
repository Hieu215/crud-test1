import { put, call, takeLatest } from 'redux-saga/effects';
import { editUserSucces, editUserFail } from '~/actions';
import { editUserApi } from '~/api';
import { EDIT_USER } from '~/constants';

export function* onEditUsersStartAsync({ payload: { id, values } }) {
  try {
    const response = yield call(editUserApi, id, values);
    if (response.status === 200) {
      yield put(editUserSucces());
    }
  } catch (error) {
    yield put(editUserFail(error.toString()));
  }
}
export default function* onEditUser() {
  yield takeLatest(EDIT_USER.START, onEditUsersStartAsync);
}
