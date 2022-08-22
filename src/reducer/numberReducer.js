import { NUMBER } from '~/constants';

const initialState = {
  number: 0,
  loading: false,
  error: null,
};
const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER.START:
      return {
        ...state,
        loading: true,
        number: state.number + action.payload,
      };
    case NUMBER.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case NUMBER.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default numberReducer;
