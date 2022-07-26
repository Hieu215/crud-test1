import { USERS } from '~/constants';
const loadUsers = () => ({
  type: USERS.LOAD,
});
const loadUsersSucces = (user) => ({
  type: USERS.LOAD,
  payload: user,
});
const loadUsersFail = (error) => ({
  type: USERS.LOAD,
  payload: error,
});
export { loadUsers, loadUsersSucces, loadUsersFail };
