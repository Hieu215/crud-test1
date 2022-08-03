import { EDIT_USER } from '~/constants';

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER.START:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case EDIT_USER.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default editUserReducer;
