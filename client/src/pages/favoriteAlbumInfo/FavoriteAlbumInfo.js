import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/loader/Loader';
import { getFavoriteAlbumRequest } from "../../store/albums/actions";
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import FavoriteAlbum from "./FavoriteAlbum";



const FavoriteAlbumInfo = props => {
  const { getFavoriteAlbum, albumId, favoriteAlbum, loading, error } = props;

  useEffect(() => {
    getFavoriteAlbum(albumId)
  }, [albumId]);



  return (
    <div className="container">
      {loading || !favoriteAlbum ?
        <Loader />
        :
        error ?
          <ErrorMessage/>
          :
          <FavoriteAlbum album={favoriteAlbum}/>
      }
    </div>
  );
};


const mapStateToProps = state => ({
  albumId: state.albums.albumId,
  favoriteAlbum: state.albums.favoriteAlbum,
});


const mapDispatchToProps = dispatch => ({
  getFavoriteAlbum: albumId => dispatch(getFavoriteAlbumRequest(albumId))
})



export default connect(mapStateToProps, mapDispatchToProps)(FavoriteAlbumInfo);

