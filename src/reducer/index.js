import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import createUsersReducer from './createUserReducer';
import deleteUsersReducer from './deleteReducer';
import editUserReducer from './editUserReducer';
import searchReducer from './searchReducer';
import getUserReducer from './getUserReducer';
const rootReducer = combineReducers({
  users: usersReducer,
  createUser: createUsersReducer,
  deleteUser: deleteUsersReducer,
  editUser: editUserReducer,
  searchUser: searchReducer,
  getUser: getUserReducer,
});

export default rootReducer;
