import { USERS, CREATE_USER, DELETE_USER, EDIT_USER, SEARCH_USER, GET_USER } from '~/constants';
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
const deleteUserStart = (userId) => ({
  type: DELETE_USER.START,
  payload: userId,
});
const deleteUserSucces = (userId) => ({
  type: DELETE_USER.SUCCESS,
  payload: userId,
});
const deleteUserFail = (error) => ({
  type: DELETE_USER.FAIL,
  payload: error,
});
const editUserStart = (userInfo) => ({
  type: EDIT_USER.START,
  payload: userInfo,
});
const editUserSucces = () => ({
  type: EDIT_USER.SUCCESS,
});
const editUserFail = (error) => ({
  type: EDIT_USER.FAIL,
  payload: error,
});
const searchUserStart = (keyword) => ({
  type: SEARCH_USER.START,
  payload: keyword,
});
const searchUserSucces = () => ({
  type: SEARCH_USER.SUCCESS,
});
const searchUserFail = (error) => ({
  type: EDIT_USER.FAIL,
  payload: error,
});
const getUserStart = (userId) => ({
  type: GET_USER.START,
  payload: userId,
});
const getUserSucces = (user) => ({
  type: GET_USER.SUCCESS,
  payload: user,
});
const getUserFail = (error) => ({
  type: GET_USER.FAIL,
  payload: error,
});
export {
  loadUsers,
  loadUsersSucces,
  loadUsersFail,
  createUserStart,
  createUserSucces,
  createUserFail,
  deleteUserStart,
  deleteUserSucces,
  deleteUserFail,
  editUserStart,
  editUserSucces,
  editUserFail,
  searchUserStart,
  searchUserSucces,
  searchUserFail,
  getUserStart,
  getUserSucces,
  getUserFail,
};
