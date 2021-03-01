import { Types } from './actions';



const initialState = {
  albums: null,
  loading: false,
  error: false,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.ALBUMS_REQUEST: {
      return {
        ...state,
        loading: true,
        //albums: action.payload,
      }
    }
    case Types.ALBUMS_SUCCESS: {
      return {
        ...state,
        albums: action.payload.data,
        loading: false,
      }
    }
    case Types.ALBUMS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }


    // case Types.SET_ID_FOR_SKANS: {

    //   return {
    //     ...state,
    //     idForSkans: action.payload
    //   }
    // }
    // case Types.SET_TITLE_FOR_SKANS: {
    //   return {
    //     ...state,
    //     titleForSkans: action.payload
    //   }
    // }

    default: return state
  };
};


export default reducer;
