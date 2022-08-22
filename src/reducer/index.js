import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import createUsersReducer from './createUserReducer';
import deleteUsersReducer from './deleteReducer';
import editUserReducer from './editUserReducer';
import searchReducer from './searchReducer';
import getUserReducer from './getUserReducer';
import numberReducer from './numberReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
const rootReducer = combineReducers({
  users: usersReducer,
  createUser: createUsersReducer,
  deleteUser: deleteUsersReducer,
  editUser: editUserReducer,
  searchUser: searchReducer,
  getUser: getUserReducer,
  number: numberReducer,
  register: registerReducer,
  login: loginReducer,
});

export default rootReducer;
