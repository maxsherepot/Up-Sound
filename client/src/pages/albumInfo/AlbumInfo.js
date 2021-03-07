import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/loader/Loader';
import { getAlbumRequest, addToFavoritesRequest } from "../../store/albums/actions";
import AlbumDetails from '../../components/albums/AlbumDetails';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AlbumInfo = props => {
  const { getAlbum, albumId, album, loading, error, errorMessage, successMessage, addToFavorites } = props;
  const userData = JSON.parse(localStorage.getItem("userData"))
  const email = userData.email;

  useEffect(() => {
    getAlbum(albumId)

    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      })
    }

    if (successMessage) {
      toast.success(successMessage, {
        position: "top-right",
        autoClose: 3000,
      })
    }
  }, [errorMessage, successMessage]);

  // useEffect(() => {
  //   toast.error(errorMessage, {
  //     position: "top-right",
  //     autoClose: 3000,
  //   })
  // }, [errorMessage])

  // useEffect(() => {
  //   toast.success(successMessage, {
  //     position: "top-right",
  //     autoClose: 3000,
  //   })
  // }, [successMessage])

  const toFavorites = item => {
    addToFavorites({ email, ...item })
  }
  console.log("errorMessage:", errorMessage, "successMessage:", successMessage)


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
  addToFavorites: data => dispatch(addToFavoritesRequest(data))
})



export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);

