import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import CreateUsersReducer from './createUserReducer';
const rootReducer = combineReducers({
  users: usersReducer,
  createUser: CreateUsersReducer,
});

export default rootReducer;
