import { put, call, take } from 'redux-saga/effects';
import { getUserSucces, getUserFail } from '~/actions';
import { getUserApi } from '~/api';
import { GET_USER } from '~/constants';

export function* onGetUsersStartAsync(userId) {
  try {
    const response = yield call(getUserApi, userId);
    if (response.status === 200) {
      yield put(getUserSucces(response.data));
    }
  } catch (error) {
    yield put(getUserFail(error.toString()));
  }
}
export default function* onGetUser() {
  while (true) {
    const { payload: userId } = yield take(GET_USER.START);
    yield call(onGetUsersStartAsync, userId);
  }
}
