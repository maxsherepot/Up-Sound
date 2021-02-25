import { Types } from './actions';



const initialState = {
  user: null,
  loading: false,
  error: false,
  userId: null,
  token: null
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


    case Types.LOGIN_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.LOGIN_SUCCESS: {
      return {
        ...state,
        user: null,
        token: action.payload.token,
        userId: action.payload.userId,
        loading: false,
        error: false,
      }
    }
    case Types.LOGIN_FAILURE: {
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      }
    }
    case Types.LOGIN_OUT: {
      return {
        ...state,
        userId: null,
        token: null
      }
    }

    default: return state
  };
};


export default reducer;
