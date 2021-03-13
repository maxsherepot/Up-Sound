import React, { useEffect } from 'react';
import Loader from "../../components/loader/Loader"
import ErrorMessage from "../../components/errorMessage/ErrorMessage"
import { connect } from "react-redux";
import { getAlbumsRequest, getFavoriteAlbumsRequest } from "../../store/albums/actions";
import Pagination from '../../components/pagination/Pagination';
import { ToastContainer } from 'react-toastify';
import showToasts from '../../assets/functions/toasts/showToasts';



const AlbumsList = props => {
  const { getAlbums, loading, error, albums, getFavoriteAlbums, favoriteAlbums, errorMessage, successMessage, isFavorite } = props;

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
    showToasts({ errorMessage, successMessage });
  }, [errorMessage, successMessage]);


  return (
    <div className="container">
      <ToastContainer />

      {
        isFavorite
          ?

          loading || !favoriteAlbums ?
            <Loader />
            :
            error ?
              <ErrorMessage />
              :
              !favoriteAlbums.length
                ?
                <h3 className="text-light text-center">No favorite albums yet</h3>
                :
                <Pagination
                  data={favoriteAlbums}
                  isFavorite={true} />

          :

          loading || !albums ?
            <Loader />
            :
            error ?
              <ErrorMessage />
              :
              !albums.length
                ?
                <h3 className="text-light text-center">No albums yet</h3>
                :
                <Pagination
                  data={albums}
                  isFavorite={false} />
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
  getFavoriteAlbums: email => dispatch(getFavoriteAlbumsRequest(email))
})


export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);
