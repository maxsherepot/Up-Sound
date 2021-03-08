import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/loader/Loader';
import { getFavoriteAlbumRequest, deleteFromFavoritesRequest } from "../../store/albums/actions";
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import AlbumDetails from '../../components/albums/AlbumDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom"


const FavoriteAlbumInfo = props => {
  const { albumId, errorMessage, successMessage, getFavoriteAlbum, favoriteAlbum, loading, error, deleteFromFavorites } = props;
  const history = useHistory()

  useEffect(() => {
    getFavoriteAlbum(albumId)

    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 2000,
      })
    }

    if (successMessage) {
      toast.success(successMessage, {
        position: "top-right",
        autoClose: 2000,
      })
    }
  }, [errorMessage, successMessage]);

  const deleteFavorite = async id => {
    await deleteFromFavorites(id)
    history.push("/favorites")
  }


  return (
    <div className="container">
      {loading || !favoriteAlbum ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          <AlbumDetails
            album={favoriteAlbum}
            isFavorite={true}
            deleteFromFavorites={deleteFavorite}
          />
      }
    </div>
  );
};


const mapStateToProps = state => ({
  albumId: state.albums.albumId,
  favoriteAlbum: state.albums.favoriteAlbum,
  loading: state.albums.loading,
  error: state.albums.error,
  errorMessage: state.albums.errorMessage,
  successMessage: state.albums.successMessage,
});


const mapDispatchToProps = dispatch => ({
  getFavoriteAlbum: albumId => dispatch(getFavoriteAlbumRequest(albumId)),
  deleteFromFavorites: id => dispatch(deleteFromFavoritesRequest(id))
})



export default connect(mapStateToProps, mapDispatchToProps)(FavoriteAlbumInfo);

