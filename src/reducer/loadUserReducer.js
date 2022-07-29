import { USERS } from '~/constants';
const initialState = {
  users: [],
  loading: false,
  error: null,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.LOAD:
      return {
        ...state,
        loading: true,
      };
    case USERS.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USERS.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default usersReducer;
