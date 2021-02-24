import { Types } from './actions';



const initialState = {
  user: null,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.REGISTER_REQUEST: {

      return {
        ...state,
        loading: true
      }
    }
    case Types.REGISTER_SUCCESS: {

      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      }
    }
    case Types.REGISTER_FAILURE: {

      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      }
    }

    default: return state
  };
};


export default reducer;
