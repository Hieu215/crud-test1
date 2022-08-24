import { REGISTER } from '~/constants';

const initialState = {
  success: false,
  loading: false,
  error: null,
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER.START:
      return {
        ...state,
        loading: true,
      };
    case REGISTER.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case REGISTER.FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default registerReducer;
