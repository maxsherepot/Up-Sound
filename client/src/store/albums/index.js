import { Types } from './actions';



const initialState = {
  albums: null,
  album: null,
  loading: false,
  error: false,
  albumId:null
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.ALBUMS_REQUEST: {
      return {
        ...state,
        loading: true
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

    case Types.ALBUM_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.ALBUM_SUCCESS: {
      return {
        ...state,
        album: action.payload,
        loading: false,
      }
    }
    case Types.ALBUM_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }


    case Types.SET_ID_FOR_ALBUM: {
      return {
        ...state,
        albumId: action.payload
      }
    }
    

    default: return state
  };
};


export default reducer;
