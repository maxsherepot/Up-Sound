import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/loader/Loader';
import { getAlbumRequest, addToFavoritesRequest } from "../../store/albums/actions";
import AlbumDetails from '../../components/albums/AlbumDetails';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { ToastContainer } from 'react-toastify';
import showToasts from '../../assets/functions/toasts/showToasts';



const AlbumInfo = props => {
  const { getAlbum, albumId, album, loading, error, errorMessage, successMessage, addToFavorites } = props;
  const userData = JSON.parse(localStorage.getItem("userData"))
  const email = userData.email;

  useEffect(() => {
    getAlbum(albumId)

    showToasts({ errorMessage, successMessage })
  }, [errorMessage, successMessage]);

  const toFavorites = item => {
    addToFavorites({ email, ...item })
  }


  return (
    <div className="container">
      <ToastContainer />

      {loading || !album ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          <AlbumDetails
            album={album}
            isFavorite={false}
            addToFavorites={toFavorites}
          />
      }
    </div>
  );
};


const mapStateToProps = state => ({
  albumId: state.albums.albumId,
  album: state.albums.album,
  loading: state.albums.loading,
  error: state.albums.error,
  errorMessage: state.albums.errorMessage,
  successMessage: state.albums.successMessage,
});


const mapDispatchToProps = dispatch => ({
  getAlbum: albumId => dispatch(getAlbumRequest(albumId)),
  addToFavorites: data => dispatch(addToFavoritesRequest(data)),
})



export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);

