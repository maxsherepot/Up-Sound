import React, { useEffect } from 'react';
import Loader from "../../components/loader/Loader"
import ErrorMessage from "../../components/errorMessage/ErrorMessage"
import { connect } from "react-redux";
import { getFavoriteAlbumsRequest } from "../../store/albums/actions";
import AlbumCard from "../../components/albums/AlbumCard";
import { ToastContainer } from 'react-toastify';
import showToasts from '../../assets/functions/toasts/showToasts';



const FavoriteAlbumsPage = props => {
  const { getFavoriteAlbums, loading, error, favoriteAlbums, errorMessage, successMessage } = props;

  const userData = JSON.parse(localStorage.getItem("userData") || null)
  const email = userData.email;

  useEffect(() => {
    getFavoriteAlbums(email)

    showToasts({ errorMessage, successMessage })
  }, [errorMessage, successMessage]);



  return (
    <div className="container">
      <h1 className="text-light text-center">Favorite Albums</h1>
      <ToastContainer />

      {loading || !favoriteAlbums ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          !favoriteAlbums.length
            ?
            <h3 className="text-light text-center">No favorite albums yet</h3>
            :
            <div className="d-flex justify-content-between mt-5 text-light">
              {favoriteAlbums.map(item => {
                return <AlbumCard
                  key={item._id}
                  item={item}
                  albumIsFavorite={true} />
              })
              }
            </div>
      }
    </div >
  );
};



const mapStateToProps = state => ({
  favoriteAlbums: state.albums.favoriteAlbums,
  loading: state.albums.loading,
  error: state.albums.error,
  errorMessage: state.albums.errorMessage,
  successMessage: state.albums.successMessage,
});


const mapDispatchToProps = dispatch => ({
  getFavoriteAlbums: email => dispatch(getFavoriteAlbumsRequest(email))
})



export default connect(mapStateToProps, mapDispatchToProps)(FavoriteAlbumsPage);
