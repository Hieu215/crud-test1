import { LOGIN, LOGOUT } from '~/constants';
const initialState = {
  currentUsers: null,
  loading: false,
  error: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.START:
      return {
        ...state,
        loading: true,
        currentUsers: action.payload,
      };
    case LOGOUT.START:
      return {
        ...state,
        loading: true,
        error: false,
        currentUsers: null,
      };
    case LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT.START:
      return {
        ...state,
        error: false,
      };
    case LOGIN.FAIL:
    case LOGOUT.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
