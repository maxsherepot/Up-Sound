import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/loader/Loader';
import { getAlbumRequest, addToFavoritesRequest, clearToastMessages, getFavoriteAlbumRequest, deleteFromFavoritesRequest } from "../../store/albums/actions";
import AlbumDetails from '../../components/albums/AlbumDetails';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { ToastContainer } from 'react-toastify';
import showToasts from '../../assets/functions/toasts/showToasts';
import { useHistory } from "react-router-dom"
import "./albumInfo.scss"



const AlbumInfo = props => {
  const { getAlbum, albumId, album, loading, error, errorMessage, successMessage, addToFavorites, clearToast, getFavoriteAlbum, favoriteAlbum, deleteFromFavorites, isFavorite } = props;

  const [sent, setSend] = useState(false)

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
  }, [isFavorite, albumId, getAlbum, getFavoriteAlbum]);

  useEffect(() => {
    if (!isFavorite) {
      showToasts({ errorMessage, successMessage });
      return () => clearToast()
    }
  }, [errorMessage, successMessage, clearToast, isFavorite]);

  useEffect(() => {
    if (sent && !loading) {
      history.push("/favorites")
    }
  }, [sent, loading, history]);

  const toFavorites = item => {
    addToFavorites({ email, ...item })
  }

  const deleteFavorite = async id => {
    deleteFromFavorites(id)
    setSend(true)
  }


  return (
    <div className="container">
      <ToastContainer />

      {error ?
        <ErrorMessage />
        :
        loading || (isFavorite ? !favoriteAlbum : !album)
          ?
          <Loader />
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

