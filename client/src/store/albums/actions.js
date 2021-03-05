import { getAlbums, getAlbum, getFavoriteAlbums, getFavoriteAlbum } from '../../helpers/albums';


export const Types = {
  ALBUMS_REQUEST: 'ALBUMS_REQUEST',
  ALBUMS_SUCCESS: 'ALBUMS_SUCCESS',
  ALBUMS_FAILURE: 'ALBUMS_FAILURE',

  ALBUM_REQUEST: 'ALBUM_REQUEST',
  ALBUM_SUCCESS: 'ALBUM_SUCCESS',
  ALBUM_FAILURE: 'ALBUM_FAILURE',

  FAVORITE_ALBUMS_REQUEST: 'FAVORITE_ALBUMS_REQUEST',
  FAVORITE_ALBUMS_SUCCESS: 'FAVORITE_ALBUMS_SUCCESS',
  FAVORITE_ALBUMS_FAILURE: 'FAVORITE_ALBUMS_FAILURE',

  FAVORITE_ALBUM_REQUEST: 'FAVORITE_ALBUM_REQUEST',
  FAVORITE_ALBUM_SUCCESS: 'FAVORITE_ALBUM_SUCCESS',
  FAVORITE_ALBUM_FAILURE: 'FAVORITE_ALBUM_FAILURE',

  SET_ID_FOR_ALBUM: 'SET_ID_FOR_ALBUM',
};



export const getAlbumsRequest = () => {
  return dispatch => {
    dispatch(startAlbumsRequest());

    getAlbums()
      .then(res => {
        if (res.status === 200) {
          dispatch(getAlbumsSuccess(res));

        } else {
          dispatch(getAlbumsFailure(res));
        }
      })
  };
};

export const getFavoriteAlbumsRequest = email => {
  return dispatch => {
    dispatch(startFavoriteAlbumsRequest());

    getFavoriteAlbums(email)
      .then(res => {
        if (res.status === 200 || 304) {
          dispatch(getFavoriteAlbumsSuccess(res));

        } else {
          dispatch(getFavoriteAlbumsFailure(res));
        }
      })
  };
};

export const getAlbumRequest = id => {
  return dispatch => {
    dispatch(startAlbumRequest());

    getAlbum(id)
      .then(res => {

        if (res.status === 200) {
          dispatch(getAlbumSuccess(res.data));

        } else {
          dispatch(getAlbumFailure(res));
        }
      })
  };
};

export const getFavoriteAlbumRequest = id => {
  return dispatch => {
    dispatch(startFavoriteAlbumRequest());

    getFavoriteAlbum(id)
      .then(res => {

        if (res.status === 200) {
          dispatch(getFavoriteAlbumSuccess(res.data));

        } else {
          dispatch(getFavoriteAlbumFailure(res));
        }
      })
  };
};

export const setIdForAlbum = id => {
  return setId(id);
};



const startAlbumsRequest = () => ({
  type: Types.ALBUMS_REQUEST
});

const getAlbumsSuccess = payload => ({
  type: Types.ALBUMS_SUCCESS,
  payload
});

const getAlbumsFailure = error => ({
  type: Types.ALBUMS_FAILURE,
  payload: {
    error
  }
});


const startFavoriteAlbumsRequest = () => ({
  type: Types.FAVORITE_ALBUMS_REQUEST
});

const getFavoriteAlbumsSuccess = payload => ({
  type: Types.FAVORITE_ALBUMS_SUCCESS,
  payload
});

const getFavoriteAlbumsFailure = error => ({
  type: Types.FAVORITE_ALBUMS_FAILURE,
  payload: {
    error
  }
});


const startAlbumRequest = () => ({
  type: Types.ALBUM_REQUEST
});

const getAlbumSuccess = payload => ({
  type: Types.ALBUM_SUCCESS,
  payload
});

const getAlbumFailure = error => ({
  type: Types.ALBUM_FAILURE,
  payload: {
    error
  }
});


const startFavoriteAlbumRequest = () => ({
  type: Types.FAVORITE_ALBUM_REQUEST
});

const getFavoriteAlbumSuccess = payload => ({
  type: Types.FAVORITE_ALBUM_SUCCESS,
  payload
});

const getFavoriteAlbumFailure = error => ({
  type: Types.FAVORITE_ALBUM_FAILURE,
  payload: {
    error
  }
});


const setId = payload => ({
  type: Types.SET_ID_FOR_ALBUM,
  payload
});

