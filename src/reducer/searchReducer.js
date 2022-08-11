import { SEARCH_USER } from '~/constants';

const initialState = {
  keyWord: '',
  loading: false,
  error: null,
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER.START:
      return {
        ...state,
        loading: true,
        keyWord: action.payload,
      };
    case SEARCH_USER.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SEARCH_USER.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
