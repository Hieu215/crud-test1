import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import createUsersReducer from './createUserReducer';
import deleteUsersReducer from './deleteReducer';
import editUserReducer from './editUserReducer';
const rootReducer = combineReducers({
  users: usersReducer,
  createUser: createUsersReducer,
  deleteUser: deleteUsersReducer,
  editUser: editUserReducer,
});

export default rootReducer;
