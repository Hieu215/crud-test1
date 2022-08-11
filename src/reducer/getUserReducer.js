import { GET_USER } from '~/constants';

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.START:
      return {
        ...state,
        loading: true,
      };
    case GET_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USER.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getUserReducer;
