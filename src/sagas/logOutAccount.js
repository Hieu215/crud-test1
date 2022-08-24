// import { put, call, takeLatest } from 'redux-saga/effects';
// import { logOutAcountSucces, logOutAcountFail } from '~/actions';
// import { logOutAccountApi } from '~/api';
// import { LOGOUT } from '~/constants';

// export function* onLogOutAccountStartAsync({ payload }) {
//   try {
//     const response = yield call(logOutAccountApi, payload);
//     if (response.status === 200) {
//       yield put(logOutAcountSucces());
//     }
//   } catch (error) {
//     yield put(logOutAcountFail());
//   }
// }
// export default function* onLoginAccount() {
//   yield takeLatest(LOGOUT.START, onLogOutAccountStartAsync);
// }
