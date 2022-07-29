import { CREATE_USER } from '~/constants';
const initialState = {
  users: [],
  loading: false,
  error: null,
};
const CreateUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER.START:
        return {
          ...state,
          loading: true,
        };
      case CREATE_USER.SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case CREATE_USER.FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default CreateUsersReducer;