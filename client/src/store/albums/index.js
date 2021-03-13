import { Types } from './actions';



const initialState = {
  albums: null,
  album: null,
  favoriteAlbums: null,
  favoriteAlbum: null,
  loading: false,
  error: false,
  albumId: null,
  errorMessage: null,
  successMessage: null
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.DELETE_FROM_FAVORITES_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case Types.DELETE_FROM_FAVORITES_SUCCESS: {
      return {
        ...state,
        successMessage: action.payload,
        loading: false,
        errorMessage: null,
        favoriteAlbums: null,
      }
    }
    case Types.DELETE_FROM_FAVORITES_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: null,
        favoriteAlbums: null,
        loading: false,
      }
    }


    case Types.ADD_TO_FAVORITES_REQUEST: {
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      }
    }
    case Types.ADD_TO_FAVORITES_SUCCESS: {
      return {
        ...state,
        successMessage: action.payload,
        loading: false,
        errorMessage: null,
      }
    }
    case Types.ADD_TO_FAVORITES_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: null,
        loading: false,
      }
    }


    case Types.ALBUMS_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        successMessage: null
      }
    }
    case Types.ALBUMS_SUCCESS: {
      return {
        ...state,
        albums: action.payload,
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


    case Types.FAVORITE_ALBUMS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case Types.FAVORITE_ALBUMS_SUCCESS: {
      return {
        ...state,
        favoriteAlbums: action.payload,
        loading: false,
      }
    }
    case Types.FAVORITE_ALBUMS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }


    case Types.ALBUM_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        successMessage: null
      }
    }
    case Types.ALBUM_SUCCESS: {
      return {
        ...state,
        album: action.payload,
        loading: false,
        errorMessage: null,
        successMessage: null
      }
    }
    case Types.ALBUM_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        errorMessage: null,
        successMessage: null
      }
    }

    case Types.FAVORITE_ALBUM_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case Types.FAVORITE_ALBUM_SUCCESS: {
      return {
        ...state,
        favoriteAlbum: action.payload,
        loading: false,
      }
    }
    case Types.FAVORITE_ALBUM_FAILURE: {
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


    case Types.CLEAR_TOAST_MESSAGES: {
      return {
        ...state,
        errorMessage: null,
        successMessage: null
      }
    }

    default: return state
  };
};


export default reducer;
