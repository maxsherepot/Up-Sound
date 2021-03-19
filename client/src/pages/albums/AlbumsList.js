import React, { useEffect } from 'react';
import Loader from "../../components/loader/Loader"
import ErrorMessage from "../../components/errorMessage/ErrorMessage"
import { connect } from "react-redux";
import { getAlbumsRequest, getFavoriteAlbumsRequest, clearToastMessages } from "../../store/albums/actions";
import Pagination from '../../components/pagination/Pagination';
import { ToastContainer } from 'react-toastify';
import showToasts from '../../assets/functions/toasts/showToasts';



const AlbumsList = props => {
  const { getAlbums, loading, error, albums, getFavoriteAlbums, favoriteAlbums, errorMessage, successMessage, isFavorite, clearToast } = props;

  const userData = JSON.parse(localStorage.getItem("userData") || null)
  const email = userData.email;

  useEffect(() => {
    if (isFavorite) {
      getFavoriteAlbums(email)
    } else {
      getAlbums()
    }
  }, [isFavorite]);

  useEffect(() => {
    if (isFavorite) {
      showToasts({ errorMessage, successMessage });
      clearToast()
    }
  }, [errorMessage, successMessage]);

  console.log("loading", loading, "error", error)



  return (
    <div className="container">
      <ToastContainer />

      {error ?
        <ErrorMessage />
        :
        loading || (isFavorite ? !favoriteAlbums : !albums)
          ?
          <Loader />
          :
          (isFavorite && !favoriteAlbums.length) || (!isFavorite && !albums.length)
            ?
            <h3 className="text-light text-center mt-5">No albums yet</h3>
            :
            <Pagination
              data={isFavorite ? favoriteAlbums : albums}
              isFavorite={isFavorite ? true : false} />
      }
    </div>
  );
};


const mapStateToProps = state => ({
  albums: state.albums.albums,
  loading: state.albums.loading,
  error: state.albums.error,

  favoriteAlbums: state.albums.favoriteAlbums,
  errorMessage: state.albums.errorMessage,
  successMessage: state.albums.successMessage,
});


const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbumsRequest()),
  clearToast: () => dispatch(clearToastMessages()),
  getFavoriteAlbums: email => dispatch(getFavoriteAlbumsRequest(email))
})


export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);
