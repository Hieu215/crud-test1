import { DELETE_USER } from '~/constants';

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const deleteUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER.START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case DELETE_USER.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default deleteUsersReducer;
