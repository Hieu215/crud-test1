import { LOGIN } from '~/constants';
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
      };
    case LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        currentUsers: action.payload,
      };
    case LOGIN.FAIL:
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
