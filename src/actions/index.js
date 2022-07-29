import { USERS, CREATE_USER } from '~/constants';
const loadUsers = () => ({
  type: USERS.LOAD,
});
const loadUsersSucces = (users) => ({
  type: USERS.LOAD_SUCCESS,
  payload: users,
});
const loadUsersFail = (error) => ({
  type: USERS.LOAD_FAIL,
  payload: error,
});
const createUserStart = (user) => ({
  type: CREATE_USER.START,
  payload: user,
});
const createUserSucces = () => ({
  type: CREATE_USER.SUCCESS,
});
const createUserFail = (error) => ({
  type: CREATE_USER.FAIL,
  payload: error,
});
export { loadUsers, loadUsersSucces, loadUsersFail, createUserStart, createUserSucces, createUserFail };
