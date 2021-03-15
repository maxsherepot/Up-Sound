import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/loader/Loader';
import { getAlbumRequest, addToFavoritesRequest, clearToastMessages, getFavoriteAlbumRequest, deleteFromFavoritesRequest } from "../../store/albums/actions";
import AlbumDetails from '../../components/albums/AlbumDetails';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { ToastContainer } from 'react-toastify';
import showToasts from '../../assets/functions/toasts/showToasts';
import { useHistory } from "react-router-dom"



const AlbumInfo = props => {
  const { getAlbum, albumId, album, loading, error, errorMessage, successMessage, addToFavorites, clearToast, getFavoriteAlbum, favoriteAlbum, deleteFromFavorites, isFavorite } = props;

  const userData = JSON.parse(localStorage.getItem("userData"))
  const email = userData.email;
  const history = useHistory()


  useEffect(() => {
    const sessionAlbumId = sessionStorage.getItem("albumId");

    if (isFavorite) {
      getFavoriteAlbum(albumId || sessionAlbumId)
    } else {
      getAlbum(albumId || sessionAlbumId)
    }
  }, [isFavorite, albumId]);


  useEffect(() => {
    if (!isFavorite) {
      showToasts({ errorMessage, successMessage });
      return () => clearToast()
    }
  }, [errorMessage, successMessage]);


  const toFavorites = item => {
    addToFavorites({ email, ...item })
  }

  const deleteFavorite = async id => {
    await deleteFromFavorites(id)
    history.push("/favorites")
  }



  return (
    <div className="container">
      <ToastContainer />

      {loading || (isFavorite ? !favoriteAlbum : !album)
        ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          <AlbumDetails
            album={isFavorite ? favoriteAlbum : album}
            isFavorite={isFavorite ? true : false}
            addToFavorites={toFavorites}
            deleteFromFavorites={deleteFavorite}
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
  favoriteAlbum: state.albums.favoriteAlbum,
});


const mapDispatchToProps = dispatch => ({
  getAlbum: albumId => dispatch(getAlbumRequest(albumId)),
  clearToast: () => dispatch(clearToastMessages()),
  addToFavorites: data => dispatch(addToFavoritesRequest(data)),
  getFavoriteAlbum: albumId => dispatch(getFavoriteAlbumRequest(albumId)),
  deleteFromFavorites: id => dispatch(deleteFromFavoritesRequest(id))
})



export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);

