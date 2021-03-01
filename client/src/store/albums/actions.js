import { getAlbums } from '../../helpers/albums';


export const Types = {
  ALBUMS_REQUEST: 'ALBUMS_REQUEST',
  ALBUMS_SUCCESS: 'ALBUMS_SUCCESS',
  ALBUMS_FAILURE: 'ALBUMS_FAILURE',
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

export const setIdForAlbum = id => {
  return setId(id);
};
// export const getAlbumsRequest = (id) => {
//   return dispatch => {
//     dispatch(startAlbumsRequest());

//     getAlbums(id.idForAlbums)
//       .then(res => {
//         if (res.status === 200) {
//           dispatch(getAlbumsSuccess(res));

//         } else {
//           dispatch(getAlbumsFailure(res));
//         }
//       })
//   };
// };

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


const setId = payload => ({
  type: Types.SET_ID_FOR_ALBUM,
  payload
});

